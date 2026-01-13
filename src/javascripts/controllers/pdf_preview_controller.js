import { Controller } from "@hotwired/stimulus"

// 常量定义
const FPDF_REVERSE_BYTE_ORDER = 16
const ERROR_PASSWORD_REQUIRED = 4
const MIN_SCALE = 0.5
const MAX_SCALE = 3.0
const SCALE_STEP = 0.25
const DEFAULT_SCALE = 1.5

// 延迟导入 @embedpdf/pdfium 以避免打包问题
let pdfiumInit = null
async function getPdfiumInit() {
  if (!pdfiumInit) {
    const module = await import("@embedpdf/pdfium")
    pdfiumInit = module.init
  }
  return pdfiumInit
}

export default class extends Controller {
  static values = {
    url: String,
    wasmUrl: String,
    scale: { type: Number, default: DEFAULT_SCALE }
  }

  static targets = ["container", "canvas", "loading", "error", "controls", "pageInfo"]

  connect() {
    // 初始化状态
    this.pdfiumInstance = null
    this.pdfData = null
    this.filePtr = null
    this.docPtr = null
    this.currentPage = 1
    this.totalPages = 0
    this.pagePtrs = {}
    this.isRendering = false
    this.renderQueue = null

    // 绑定键盘事件
    this.boundHandleKeydown = this.handleKeydown.bind(this)

    if (this.hasUrlValue && this.urlValue) {
      this.loadPDF()
    }
  }

  disconnect() {
    // 移除事件监听
    document.removeEventListener('keydown', this.boundHandleKeydown)

    // 清理资源
    this.cleanup()
  }

  // 键盘快捷键支持
  handleKeydown(event) {
    // 只在没有输入焦点时响应快捷键
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      return
    }

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        this.previousPage()
        break
      case 'ArrowRight':
        event.preventDefault()
        this.nextPage()
        break
      case '+':
      case '=':
        if (event.shiftKey || event.key === '+') {
          event.preventDefault()
          this.zoomIn()
        }
        break
      case '-':
        event.preventDefault()
        this.zoomOut()
        break
      case '0':
        event.preventDefault()
        this.resetZoom()
        break
    }
  }

  async initializePdfium() {
    if (this.pdfiumInstance) {
      return this.pdfiumInstance
    }

      // 获取 init 函数
      const init = await getPdfiumInit()

      const wasmUrl = this.wasmUrlValue

      // 验证 URL 格式
      if (!wasmUrl || typeof wasmUrl !== 'string') {
        throw new Error('WASM URL 无效')
      }

      // 确保是绝对 URL
      let absoluteUrl
      try {
        absoluteUrl = new URL(wasmUrl).href
      } catch (e) {
        // 如果是相对路径，基于当前页面构造
        absoluteUrl = new URL(wasmUrl, window.location.href).href
      }

      console.log('正在加载 PDFium WASM:', absoluteUrl)

      const response = await fetch(absoluteUrl, {
        mode: 'cors',
        credentials: 'omit'
      })

      if (!response.ok) {
        throw new Error(`无法加载 WASM 文件: ${response.status} ${response.statusText}`)
      }

      const wasmBinary = await response.arrayBuffer()

      if (!wasmBinary || wasmBinary.byteLength === 0) {
        throw new Error('WASM 文件为空')
      }

      console.log('WASM 文件加载成功，大小:', wasmBinary.byteLength, 'bytes')

      // 初始化 PDFium
      // 提供 locateFile 来避免库内部尝试自动查找 WASM 文件
      this.pdfiumInstance = await init({
        wasmBinary,
        locateFile: (path) => {
          if (!path) return absoluteUrl

          // WASM 文件直接返回绝对 URL
          if (path.endsWith('.wasm') || path.includes('pdfium')) {
            return absoluteUrl
          }

          // 处理其他文件路径
          try {
            if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
              return path
            }
            // 相对路径基于 WASM URL 的目录构造
            const baseDir = absoluteUrl.substring(0, absoluteUrl.lastIndexOf('/') + 1)
            return baseDir + path
          } catch (e) {
            console.warn('无法构造文件路径，使用 WASM URL:', path, e)
            return absoluteUrl
          }
        }
      })

      // 初始化 PDFium 扩展库（必需）
      this.pdfiumInstance.PDFiumExt_Init()

      console.log('PDFium 初始化成功')
      return this.pdfiumInstance

  }

  async loadPDF() {
    if (!this.hasUrlValue || !this.urlValue) {
      return
    }

    try {
      this.showLoading()
      this.hideError()

      // 初始化 PDFium
      await this.initializePdfium()

      // 加载 PDF 数据
      const response = await fetch(this.urlValue)
      const arrayBuffer = await response.arrayBuffer()
      this.pdfData = new Uint8Array(arrayBuffer)

      // 加载 PDF 文档
      this.filePtr = this.pdfiumInstance.pdfium.wasmExports.malloc(this.pdfData.length)
      this.pdfiumInstance.pdfium.HEAPU8.set(this.pdfData, this.filePtr)

      this.docPtr = this.pdfiumInstance.FPDF_LoadMemDocument(this.filePtr, this.pdfData.length, 0)

      if (!this.docPtr) {
        const error = this.pdfiumInstance.FPDF_GetLastError()
        this.pdfiumInstance.pdfium.wasmExports.free(this.filePtr)
        this.filePtr = null

        // 错误代码 4 表示密码保护的文档
        if (error === ERROR_PASSWORD_REQUIRED) {
          throw new Error('PDF 文档受密码保护，无法预览')
        }

        throw new Error(`无法加载 PDF 文档 (错误代码: ${error})`)
      }

      // 获取总页数
      this.totalPages = this.pdfiumInstance.FPDF_GetPageCount(this.docPtr)
      this.currentPage = 1

      // 如果容器存在，计算适合的初始缩放比例
      if (this.hasContainerTarget && this.totalPages > 0) {
        await this.adjustScaleToFit()
      }

      // 渲染第一页
      await this.renderPage(this.currentPage)
      this.updatePageInfo()
      this.showControls()
      this.updateControls()
      this.hideLoading()

      // 添加键盘事件监听
      document.addEventListener('keydown', this.boundHandleKeydown)
    } catch (error) {
      console.error("PDF 加载失败:", error)
      this.showError(error.message || "PDF 加载失败，请稍后重试")
      this.hideLoading()
      this.hideControls()
      this.cleanup()
    }
  }

  async renderPage(pageNum) {
    if (!this.pdfiumInstance || !this.docPtr || pageNum < 1 || pageNum > this.totalPages) {
      return
    }

    // 如果正在渲染，取消之前的渲染
    if (this.isRendering) {
      if (this.renderQueue) {
        clearTimeout(this.renderQueue)
      }
      this.renderQueue = setTimeout(() => this.renderPage(pageNum), 50)
      return
    }

    this.isRendering = true

    try {
      // 获取或创建页面指针
      let pagePtr = this.pagePtrs[pageNum]
      if (!pagePtr) {
        pagePtr = this.pdfiumInstance.FPDF_LoadPage(this.docPtr, pageNum - 1) // PDFium 使用 0-based 索引
        if (!pagePtr) {
          throw new Error(`无法加载第 ${pageNum} 页`)
        }
        this.pagePtrs[pageNum] = pagePtr
      }

      // 获取页面尺寸（使用 F 后缀的函数，返回浮点数，单位是点）
      const width = this.pdfiumInstance.FPDF_GetPageWidthF(pagePtr)
      const height = this.pdfiumInstance.FPDF_GetPageHeightF(pagePtr)

      // 创建或获取 canvas
      let canvas = this.hasCanvasTarget ? this.canvasTarget : this.createCanvas()
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        throw new Error('无法获取 canvas 2D 上下文')
      }

      // 计算缩放尺寸（考虑设备像素比）
      const dpr = window.devicePixelRatio || 1.0
      const effectiveScale = this.scaleValue * dpr
      let scaledWidth = Math.floor(width * effectiveScale)
      let scaledHeight = Math.floor(height * effectiveScale)

      // 创建位图用于渲染
      const bitmapPtr = this.pdfiumInstance.FPDFBitmap_Create(scaledWidth, scaledHeight, 0)

      if (!bitmapPtr) {
        throw new Error('无法创建位图')
      }

      try {
        // 设置 canvas CSS 尺寸（逻辑尺寸）
        canvas.style.width = `${scaledWidth / dpr}px`
        canvas.style.height = `${scaledHeight / dpr}px`

        // 设置 canvas 实际缓冲区尺寸（物理尺寸）
        canvas.width = scaledWidth
        canvas.height = scaledHeight

        // 填充白色背景
        this.pdfiumInstance.FPDFBitmap_FillRect(bitmapPtr, 0, 0, scaledWidth, scaledHeight, 0xFFFFFFFF)

        // 渲染页面到位图
        // 使用 FPDF_REVERSE_BYTE_ORDER 标志来正确处理颜色
        this.pdfiumInstance.FPDF_RenderPageBitmap(
          bitmapPtr,
          pagePtr,
          0,
          0,
          scaledWidth,
          scaledHeight,
          0,  // 旋转角度（0 = 无旋转）
          FPDF_REVERSE_BYTE_ORDER  // 用于正确的颜色表示
        )

        // 获取位图缓冲区
        const bufferPtr = this.pdfiumInstance.FPDFBitmap_GetBuffer(bitmapPtr)
        if (!bufferPtr) {
          throw new Error('无法获取位图缓冲区')
        }

        const bufferSize = scaledWidth * scaledHeight * 4 // RGBA

        // 创建缓冲区的副本（使用 slice()）而不是直接视图
        // 这很重要 - 必须复制数据而不是使用视图，以防止内存被释放后仍在使用数据
        const buffer = new Uint8Array(
          this.pdfiumInstance.pdfium.HEAPU8.buffer,
          this.pdfiumInstance.pdfium.HEAPU8.byteOffset + bufferPtr,
          bufferSize
        ).slice()

        // 创建 ImageData 并绘制到 canvas
        const imageData = new ImageData(
          new Uint8ClampedArray(buffer.buffer),
          scaledWidth,
          scaledHeight
        )

        ctx.putImageData(imageData, 0, 0)
      } finally {
        // 清理位图
        this.pdfiumInstance.FPDFBitmap_Destroy(bitmapPtr)
      }
    } catch (error) {
      console.error("PDF 页面渲染失败:", error)
      this.showError(`页面渲染失败: ${error.message}`)
    } finally {
      this.isRendering = false
    }
  }

  // 自动适配容器大小
  async adjustScaleToFit() {
    if (!this.hasContainerTarget || !this.docPtr || this.totalPages === 0) {
      return
    }

    try {
      // 获取第一页的尺寸
      const pagePtr = this.pdfiumInstance.FPDF_LoadPage(this.docPtr, 0)
      if (!pagePtr) {
        return
      }

      try {
        const pageWidth = this.pdfiumInstance.FPDF_GetPageWidthF(pagePtr)
        const pageHeight = this.pdfiumInstance.FPDF_GetPageHeightF(pagePtr)

        // 获取容器尺寸（减去 padding）
        const container = this.containerTarget
        const containerWidth = container.clientWidth - 32 // p-4 = 16px * 2
        const containerHeight = container.clientHeight - 32

        if (containerWidth > 0 && containerHeight > 0) {
          // 计算适合的缩放比例
          const scaleX = containerWidth / pageWidth
          const scaleY = containerHeight / pageHeight
          const fitScale = Math.min(scaleX, scaleY, MAX_SCALE)

          // 如果计算出的缩放比例合理，则使用它
          if (fitScale >= MIN_SCALE && fitScale <= MAX_SCALE) {
            this.scaleValue = fitScale
          }
        }
      } finally {
        this.pdfiumInstance.FPDF_ClosePage(pagePtr)
      }
    } catch (error) {
      console.warn('无法计算适合的缩放比例:', error)
    }
  }

  createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.className = 'max-w-full h-auto'
    canvas.style.display = 'block'
    canvas.style.margin = '0 auto'

    if (this.hasContainerTarget) {
      this.containerTarget.innerHTML = ''
      this.containerTarget.appendChild(canvas)
    } else {
      this.element.appendChild(canvas)
    }

    return canvas
  }

  async previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--
      await this.renderPage(this.currentPage)
      this.updatePageInfo()
      this.updateControls()
    }
  }

  async nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++
      await this.renderPage(this.currentPage)
      this.updatePageInfo()
      this.updateControls()
    }
  }

  async goToPage(event) {
    const pageNum = parseInt(event.target.value)
    if (pageNum >= 1 && pageNum <= this.totalPages) {
      this.currentPage = pageNum
      await this.renderPage(this.currentPage)
      this.updatePageInfo()
      this.updateControls()
    }
  }

  async zoomIn() {
    this.scaleValue = Math.min(this.scaleValue + SCALE_STEP, MAX_SCALE)
    await this.renderPage(this.currentPage)
  }

  async zoomOut() {
    this.scaleValue = Math.max(this.scaleValue - SCALE_STEP, MIN_SCALE)
    await this.renderPage(this.currentPage)
  }

  async resetZoom() {
    this.scaleValue = DEFAULT_SCALE
    await this.renderPage(this.currentPage)
  }

  updatePageInfo() {
    if (this.hasPageInfoTarget) {
      this.pageInfoTarget.textContent = `${this.currentPage} / ${this.totalPages}`
    }
  }

  updateControls() {
    if (this.hasControlsTarget) {
      const prevButton = this.controlsTarget.querySelector('[data-action*="previous"]')
      const nextButton = this.controlsTarget.querySelector('[data-action*="next"]')

      if (prevButton) {
        prevButton.disabled = this.currentPage <= 1
        prevButton.classList.toggle('opacity-50', this.currentPage <= 1)
        prevButton.classList.toggle('cursor-not-allowed', this.currentPage <= 1)
      }

      if (nextButton) {
        nextButton.disabled = this.currentPage >= this.totalPages
        nextButton.classList.toggle('opacity-50', this.currentPage >= this.totalPages)
        nextButton.classList.toggle('cursor-not-allowed', this.currentPage >= this.totalPages)
      }
    }
  }

  showLoading() {
    if (this.hasLoadingTarget) {
      this.loadingTarget.classList.remove('hidden')
    }
  }

  hideLoading() {
    if (this.hasLoadingTarget) {
      this.loadingTarget.classList.add('hidden')
    }
  }

  showError(message) {
    if (this.hasErrorTarget) {
      this.errorTarget.textContent = message
      this.errorTarget.classList.remove('hidden')
    }
  }

  hideError() {
    if (this.hasErrorTarget) {
      this.errorTarget.classList.add('hidden')
    }
  }

  showControls() {
    if (this.hasControlsTarget) {
      this.controlsTarget.classList.remove('hidden')
    }
  }

  hideControls() {
    if (this.hasControlsTarget) {
      this.controlsTarget.classList.add('hidden')
    }
  }

  cleanup() {
    // 清除渲染队列
    if (this.renderQueue) {
      clearTimeout(this.renderQueue)
      this.renderQueue = null
    }

    // 清理页面指针
    if (this.pdfiumInstance && this.pagePtrs) {
      Object.values(this.pagePtrs).forEach(pagePtr => {
        if (pagePtr) {
          try {
            this.pdfiumInstance.FPDF_ClosePage(pagePtr)
          } catch (e) {
            console.warn('关闭页面时出错:', e)
          }
        }
      })
      this.pagePtrs = {}
    }

    // 关闭文档
    if (this.pdfiumInstance && this.docPtr) {
      try {
        this.pdfiumInstance.FPDF_CloseDocument(this.docPtr)
      } catch (e) {
        console.warn('关闭文档时出错:', e)
      }
      this.docPtr = null
    }

    // 释放 PDF 数据内存
    if (this.pdfiumInstance && this.filePtr) {
      try {
        this.pdfiumInstance.pdfium.wasmExports.free(this.filePtr)
      } catch (e) {
        console.warn('释放内存时出错:', e)
      }
      this.filePtr = null
    }

    // 清理状态
    this.pdfData = null
    this.isRendering = false
  }
}
