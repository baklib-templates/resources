// import { Controller } from "@hotwired/stimulus"
// import * as pdfjsLib from "pdfjs-dist"

// // 配置 PDF.js worker - 使用 unpkg CDN（推荐，稳定可靠）
// // 自动匹配 pdfjs-dist 的版本号
// pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.4.530/build/pdf.worker.min.mjs`
// export default class extends Controller {
//   static values = {
//     url: String,
//     scale: { type: Number, default: 1.5 }
//   }

//   static targets = ["container", "canvas", "loading", "error", "controls", "pageInfo"]

//   connect() {
//     if (this.hasUrlValue && this.urlValue) {
//       this.loadPDF()
//     }
//   }

//   async loadPDF() {
//     if (!this.hasUrlValue || !this.urlValue) {
//       return
//     }

//     try {
//       this.showLoading()
//       this.hideError()

//       // 加载 PDF 文档
//       const loadingTask = pdfjsLib.getDocument({
//         url: this.urlValue,
//         withCredentials: false
//       })

//       this.pdfDoc = await loadingTask.promise
//       this.currentPage = 1
//       this.totalPages = this.pdfDoc.numPages

//       await this.renderPage(this.currentPage)
//       this.updatePageInfo()
//       this.showControls()
//       this.updateControls()
//       this.hideLoading()
//     } catch (error) {
//       console.error("PDF 加载失败:", error)
//       this.showError(error.message || "PDF 加载失败，请稍后重试")
//       this.hideLoading()
//       this.hideControls()
//     }
//   }

//   async renderPage(pageNum) {
//     try {
//       const page = await this.pdfDoc.getPage(pageNum)
//       const viewport = page.getViewport({ scale: this.scaleValue })

//       // 创建或获取 canvas
//       let canvas = this.hasCanvasTarget ? this.canvasTarget : this.createCanvas()
//       const context = canvas.getContext('2d')

//       // 设置 canvas 尺寸
//       canvas.height = viewport.height
//       canvas.width = viewport.width

//       // 渲染 PDF 页面
//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport
//       }

//       await page.render(renderContext).promise
//     } catch (error) {
//       console.error("PDF 页面渲染失败:", error)
//       this.showError("页面渲染失败")
//     }
//   }

//   createCanvas() {
//     const canvas = document.createElement('canvas')
//     canvas.className = 'max-w-full h-auto'

//     if (this.hasContainerTarget) {
//       this.containerTarget.innerHTML = ''
//       this.containerTarget.appendChild(canvas)
//     } else {
//       this.element.appendChild(canvas)
//     }

//     return canvas
//   }

//   async previousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--
//       await this.renderPage(this.currentPage)
//       this.updatePageInfo()
//       this.updateControls()
//     }
//   }

//   async nextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++
//       await this.renderPage(this.currentPage)
//       this.updatePageInfo()
//       this.updateControls()
//     }
//   }

//   async goToPage(event) {
//     const pageNum = parseInt(event.target.value)
//     if (pageNum >= 1 && pageNum <= this.totalPages) {
//       this.currentPage = pageNum
//       await this.renderPage(this.currentPage)
//       this.updatePageInfo()
//       this.updateControls()
//     }
//   }

//   zoomIn() {
//     this.scaleValue = Math.min(this.scaleValue + 0.25, 3.0)
//     this.renderPage(this.currentPage)
//   }

//   zoomOut() {
//     this.scaleValue = Math.max(this.scaleValue - 0.25, 0.5)
//     this.renderPage(this.currentPage)
//   }

//   resetZoom() {
//     this.scaleValue = 1.5
//     this.renderPage(this.currentPage)
//   }

//   updatePageInfo() {
//     if (this.hasPageInfoTarget) {
//       this.pageInfoTarget.textContent = `${this.currentPage} / ${this.totalPages}`
//     }
//   }

//   updateControls() {
//     if (this.hasControlsTarget) {
//       const prevButton = this.controlsTarget.querySelector('[data-action*="previous"]')
//       const nextButton = this.controlsTarget.querySelector('[data-action*="next"]')

//       if (prevButton) {
//         prevButton.disabled = this.currentPage <= 1
//         prevButton.classList.toggle('opacity-50', this.currentPage <= 1)
//         prevButton.classList.toggle('cursor-not-allowed', this.currentPage <= 1)
//       }

//       if (nextButton) {
//         nextButton.disabled = this.currentPage >= this.totalPages
//         nextButton.classList.toggle('opacity-50', this.currentPage >= this.totalPages)
//         nextButton.classList.toggle('cursor-not-allowed', this.currentPage >= this.totalPages)
//       }
//     }
//   }

//   showLoading() {
//     if (this.hasLoadingTarget) {
//       this.loadingTarget.classList.remove('hidden')
//     }
//   }

//   hideLoading() {
//     if (this.hasLoadingTarget) {
//       this.loadingTarget.classList.add('hidden')
//     }
//   }

//   showError(message) {
//     if (this.hasErrorTarget) {
//       this.errorTarget.textContent = message
//       this.errorTarget.classList.remove('hidden')
//     }
//   }

//   hideError() {
//     if (this.hasErrorTarget) {
//       this.errorTarget.classList.add('hidden')
//     }
//   }

//   showControls() {
//     if (this.hasControlsTarget) {
//       this.controlsTarget.classList.remove('hidden')
//     }
//   }

//   hideControls() {
//     if (this.hasControlsTarget) {
//       this.controlsTarget.classList.add('hidden')
//     }
//   }
// }
