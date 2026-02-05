import { Controller } from "@hotwired/stimulus"
import { getFileTypeInfo, formatFileSize, isImage } from "../utils/file_type"
import { getPageByPath, uploadFile, createPage } from "../services/batch_import_api"

/**
 * 批量上传控制器
 * 处理文件选择、拖拽上传、文件列表管理和上传流程
 */
export default class extends Controller {
  static targets = [
    "dropzone",
    "fileList",
    "errorAlert",
    "loadingState",
    "mainContent",
    "pageInfo",
    "fileCount",
    "fileListContainer",
    "fileInput",
    "folderInput"
  ]

  static values = {
    apiUrl: String,
    token: String,
    siteId: String,
    templateName: String,
    templateStyle: String,
    fullPath: String
  }

  connect() {
    console.log('[BatchImport] Controller connected', {
      apiUrl: this.apiUrlValue,
      token: this.tokenValue ? '***' : null,
      siteId: this.siteIdValue,
      fullPath: this.fullPathValue
    })

    this.items = []
    this.currentPage = null
    this.isLoadingPage = true  // 初始状态为加载中
    this.isProcessing = false
    this.error = null

    // 初始化拖拽区域
    this.setupDropzone()

    // 初始化 UI 状态（显示 loading，隐藏主内容）
    this.updateUI()

    // 初始化
    this.init()
  }

  disconnect() {
    // 清理所有图片预览URL，避免内存泄漏
    if (this.items) {
      this.items.forEach(item => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl)
        }
      })
    }
  }

  async init() {
    // 检查必要参数
    if (!this.apiUrlValue) {
      this.error = 'API 地址未配置，请在主题设置中配置 API 主机地址'
      this.isLoadingPage = false  // 停止加载状态
      this.showError(this.error)
      this.updateUI()
      return
    }

    // 如果有 full_path，获取页面数据
    if (this.fullPathValue && this.siteIdValue && this.tokenValue) {
      await this.loadPageData()
    } else {
      // 如果没有必要参数，停止加载状态
      this.isLoadingPage = false
      this.updateUI()
    }
  }

  setupDropzone() {
    if (!this.hasDropzoneTarget) return

    const dropzone = this.dropzoneTarget

    // 拖拽进入
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault()
      dropzone.classList.add('border-blue-500', 'bg-blue-50')
    })

    // 拖拽离开
    dropzone.addEventListener('dragleave', (e) => {
      e.preventDefault()
      dropzone.classList.remove('border-blue-500', 'bg-blue-50')
    })

    // 拖拽放下
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault()
      dropzone.classList.remove('border-blue-500', 'bg-blue-50')

      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0) {
        this.handleFiles(files)
      }
    })
  }

  // 选择文件
  selectFiles() {
    if (this.hasFileInputTarget) {
      // 重置 input 值，以便可以重复选择相同文件
      this.fileInputTarget.value = ''
      this.fileInputTarget.click()
    }
  }

  // 选择文件夹
  selectFolder() {
    if (this.hasFolderInputTarget) {
      // 重置 input 值，以便可以重复选择相同文件夹
      this.folderInputTarget.value = ''
      this.folderInputTarget.click()
    }
  }

  // 处理文件输入框变化
  handleFileInputChange(event) {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      this.handleFiles(files)
    }
  }

  // 处理文件夹输入框变化
  handleFolderInputChange(event) {
    const files = Array.from(event.target.files || [])
    if (files.length > 0) {
      this.handleFiles(files)
    }
  }

  handleFiles(files) {
    // 检查 API 地址
    if (!this.apiUrlValue) {
      this.showError('API 地址未配置，无法上传文件')
      return
    }

    // 过滤掉没有文件名的文件和系统文件
    const validFiles = files.filter(file => {
      // 检查文件名是否为空
      if (!file.name || file.name.trim().length === 0) {
        return false
      }

      // 排除系统文件
      const fileName = file.name.trim()
      const systemFiles = [
        '.DS_Store',
        'Thumbs.db',
        'desktop.ini',
        '.git',
        '.gitignore',
        '.gitattributes'
      ]

      // 检查是否是系统文件
      if (systemFiles.includes(fileName)) {
        return false
      }

      return true
    })

    if (validFiles.length === 0) {
      this.showError('所选文件中没有有效的文件（文件名不能为空）')
      return
    }


    if (validFiles.length === 0) {
      this.showError('所选文件中没有有效的文件（文件名不能为空）')
      return
    }

    const newItems = validFiles.map((file, index) => {
      const name = file.name.replace(/\.[^/.]+$/, "")
      const fileTypeInfo = getFileTypeInfo(file)

      // 如果是图片文件，创建预览URL
      let previewUrl = null
      if (isImage(file)) {
        previewUrl = URL.createObjectURL(file)
      }

      return {
        id: `file-${Date.now()}-${index}`,
        file,
        fileTypeInfo,
        name,
        previewUrl,  // 图片预览URL
        status: 'pending',
        progress: 0,
        message: '',
        pageId: null,
        pageUrl: ''
      }
    })

    this.items.push(...newItems)
    this.renderFileList()
    this.updateUI()
  }

  removeFile(itemId) {
    const item = this.items.find(i => i.id === itemId)
    // 如果是图片文件，释放预览URL以避免内存泄漏
    if (item && item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl)
    }
    this.items = this.items.filter(item => item.id !== itemId)
    this.renderFileList()
    this.updateUI()
  }

  clearItems() {
    // 释放所有图片预览URL
    this.items.forEach(item => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl)
      }
    })
    this.items = []
    this.renderFileList()
    this.updateUI()
  }

  async startProcessing() {
    if (this.isProcessing) return

    // 检查 API 地址
    if (!this.apiUrlValue) {
      this.showError('API 地址未配置，无法上传文件')
      return
    }

    if (!this.currentPage) {
      this.showError('请先加载目录数据')
      return
    }

    this.isProcessing = true
    this.updateUI()

    const queue = this.items.filter(i => i.status === 'pending' || i.status === 'error')

    for (const item of queue) {
      try {
        const fileNameWithoutExt = item.name

        // 1. Upload File
        item.status = 'uploading'
        item.progress = 0
        this.renderFileList()

        const resource = await this.uploadFileWithProgress(item, fileNameWithoutExt)

        // 2. Create Page
        item.status = 'creating_page'
        item.progress = 100
        this.renderFileList()

        const page = await this.createResourcePage(fileNameWithoutExt, resource)

        // 3. Complete
        let pageUrl = ''
        if (page.attributes.url) {
          pageUrl = page.attributes.url
        } else if (this.currentPage.attributes.domain) {
          const domain = this.currentPage.attributes.domain
          const protocol = domain.startsWith('http') ? '' : 'https://'
          pageUrl = `${protocol}${domain}${page.attributes.full_path}`
        } else {
          pageUrl = `#page-${page.id}`
        }

        item.status = 'completed'
        item.pageId = page.id
        item.pageUrl = pageUrl
        item.progress = 100
        this.renderFileList()

      } catch (err) {
        item.status = 'error'
        item.message = err instanceof Error ? err.message : String(err)
        item.progress = 0
        this.renderFileList()
      }
    }

    this.isProcessing = false
    this.updateUI()
  }

  async uploadFileWithProgress(item, name) {
    return await uploadFile(
      this.apiUrlValue,
      this.tokenValue,
      item.file,
      name,
      '',
      (progress) => {
        item.progress = progress
        this.renderFileList()
      }
    )
  }

  async createResourcePage(fileName, resourceEntity) {
    const signedId = resourceEntity.attributes.signed_id

    const templateVariables = {
      title: fileName,
      asset: signedId
    }

    const pageData = {
      name: fileName,
      parent_id: this.currentPage.id,
      template_name: this.templateNameValue,
      template_style: this.templateStyleValue,
      template_variables: templateVariables,
      published: true,
      published_at: new Date().toISOString()
    }

    return await createPage(
      this.apiUrlValue,
      this.tokenValue,
      this.siteIdValue,
      pageData
    )
  }

  async loadPageData() {
    // 检查 API 地址
    if (!this.apiUrlValue) {
      this.error = 'API 地址未配置，无法加载目录数据'
      this.showError(this.error)
      this.updateUI()
      return
    }

    this.isLoadingPage = true
    this.error = null
    this.updateUI()

    try {
      const page = await getPageByPath(
        this.apiUrlValue,
        this.tokenValue,
        this.siteIdValue,
        this.fullPathValue
      )
      this.currentPage = page
      this.updatePageInfo()
    } catch (err) {
      this.error = err instanceof Error ? err.message : '加载页面数据失败'
      this.showError(this.error)
    } finally {
      this.isLoadingPage = false
      this.updateUI()
    }
  }

  updatePageInfo() {
    if (this.hasPageInfoTarget && this.currentPage) {
      const pageName = this.currentPage.attributes.calculated_link_text || this.currentPage.attributes.full_path
      const html = `
        <i class="ri-folder-line"></i>
        <span>上传至目录: <span class="font-medium">${this.escapeHtml(pageName)}</span></span>
      `
      this.pageInfoTarget.innerHTML = html
      // 确保显示
      this.pageInfoTarget.style.display = 'flex'
    }
  }

  renderFileList() {
    if (!this.hasFileListTarget) return

    const fileList = this.fileListTarget
    const fileCount = this.hasFileCountTarget ? this.fileCountTarget : null
    const fileListContainer = this.hasFileListContainerTarget ? this.fileListContainerTarget : null

    // 更新文件数量
    if (fileCount) {
      fileCount.textContent = this.items.length
    }

    // 显示/隐藏文件列表容器
    if (fileListContainer) {
      fileListContainer.style.display = this.items.length > 0 ? 'block' : 'none'
    }

    if (this.items.length === 0) {
      fileList.innerHTML = '<div class="text-center text-gray-400 py-8">未选择文件</div>'
      return
    }

    const html = this.items.map(item => {
      const fileTypeInfo = item.fileTypeInfo || {
        icon: 'ri-file-line',
        iconColor: 'text-gray-400',
        bgColor: 'bg-gray-100',
        tagText: '其他',
        tagColor: 'bg-primary'
      }

      let statusHtml = ''
      if (item.status === 'uploading' || item.status === 'creating_page') {
        statusHtml = `
          <div class="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" style="width: ${item.progress}%"></div>
          </div>
          <div class="text-xs text-gray-500">
            ${item.progress}% - ${item.status === 'uploading' ? '正在上传...' : '正在创建页面...'}
          </div>
        `
      } else if (item.status === 'completed') {
        statusHtml = `
          <div class="text-xs text-green-600 flex items-center gap-1">
            <i class="ri-check-line"></i>
            <span>完成</span>
            ${item.pageUrl ? `<a href="${item.pageUrl}" target="_blank" class="text-blue-600 hover:underline ml-2">查看页面</a>` : ''}
          </div>
        `
      } else if (item.status === 'error') {
        statusHtml = `
          <div class="text-xs text-red-600 flex items-center gap-1">
            <i class="ri-error-warning-line"></i>
            <span>${this.escapeHtml(item.message || '上传失败')}</span>
          </div>
        `
      } else {
        statusHtml = `
          <div class="text-xs text-gray-500">等待处理</div>
        `
      }

      // 如果是图片且有预览URL，显示预览图；否则显示图标
      const thumbnailHtml = item.previewUrl
        ? `<img src="${item.previewUrl}" alt="${this.escapeHtml(item.file.name)}" class="w-full h-full object-cover rounded-lg" />`
        : `<i class="${fileTypeInfo.icon} ${fileTypeInfo.iconColor} text-xl"></i>`

      return `
        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
          <div class="flex-shrink-0 w-16 h-16 ${item.previewUrl ? '' : fileTypeInfo.bgColor} rounded-lg flex items-center justify-center overflow-hidden ${item.previewUrl ? 'bg-gray-100' : ''}">
            ${thumbnailHtml}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1 overflow-auto">
              <span class="font-medium text-gray-900 truncate">${this.escapeHtml(item.file.name)}</span>
            </div>
            <div class="text-xs text-gray-500 mb-2">${formatFileSize(item.file.size)}</div>
            ${statusHtml}
          </div>
          ${item.status === 'pending' || item.status === 'error' ? `
            <button
              type="button"
              data-action="click->batch-import#handleRemoveFile"
              data-item-id="${item.id}"
              class="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors"
              title="移除"
            >
              <i class="ri-close-line text-xl"></i>
            </button>
          ` : ''}
        </div>
      `
    }).join('')

    fileList.innerHTML = html
  }

  handleRemoveFile(event) {
    const itemId = event.currentTarget.dataset.itemId
    if (itemId) {
      this.removeFile(itemId)
    }
  }

  updateUI() {
    // 更新加载状态
    if (this.hasLoadingStateTarget) {
      this.loadingStateTarget.style.display = this.isLoadingPage ? 'block' : 'none'
    }

    // 更新主内容显示（加载完成后才显示）
    if (this.hasMainContentTarget) {
      // 只有在数据加载完成后才显示主内容
      if (this.isLoadingPage) {
        // 加载中：隐藏主内容
        this.mainContentTarget.style.display = 'none'
      } else {
        // 加载完成：显示主内容
        this.mainContentTarget.style.display = 'block'

        // 缺少必要配置时禁用交互
        const isDisabled = !this.apiUrlValue || !this.currentPage
        this.mainContentTarget.style.pointerEvents = isDisabled ? 'none' : 'auto'
        this.mainContentTarget.style.opacity = isDisabled ? '0.5' : '1'

        // 禁用拖拽区域和按钮
        if (this.hasDropzoneTarget) {
          if (isDisabled) {
            this.dropzoneTarget.classList.add('opacity-50')
          } else {
            this.dropzoneTarget.classList.remove('opacity-50')
          }
        }

        // 禁用选择按钮
        const selectFilesBtn = this.element.querySelector('[data-action*="selectFiles"]')
        const selectFolderBtn = this.element.querySelector('[data-action*="selectFolder"]')

        if (selectFilesBtn) {
          selectFilesBtn.disabled = isDisabled || this.isProcessing
        }
        if (selectFolderBtn) {
          selectFolderBtn.disabled = isDisabled || this.isProcessing
        }
      }
    }

    // 更新页面信息显示（加载完成后显示）
    if (this.hasPageInfoTarget) {
      if (this.isLoadingPage) {
        // 加载时隐藏 pageInfo
        this.pageInfoTarget.style.display = 'none'
      } else if (this.currentPage) {
        // 加载完成后显示 pageInfo
        this.pageInfoTarget.style.display = 'flex'
        this.updatePageInfo()
      } else {
        // 没有页面数据时隐藏
        this.pageInfoTarget.style.display = 'none'
      }
    }

    // 更新错误提示
    if (this.hasErrorAlertTarget) {
      if (this.error) {
        this.errorAlertTarget.style.display = 'block'
        const errorText = this.errorAlertTarget.querySelector('p')
        if (errorText) {
          errorText.textContent = this.error
        }
      } else {
        this.errorAlertTarget.style.display = 'none'
      }
    }

    // 更新按钮状态
    const startButton = this.element.querySelector('[data-action*="startProcessing"]')
    const clearButton = this.element.querySelector('[data-action*="clearItems"]')

    if (startButton) {
      startButton.disabled = this.isProcessing || this.getPendingCount() === 0
      const buttonText = startButton.querySelector('span')
      if (buttonText) {
        if (this.isProcessing) {
          buttonText.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> 上传中...'
        } else {
          buttonText.textContent = '上传文件'
        }
      }
      if (this.isProcessing || this.getPendingCount() === 0) {
        startButton.classList.add('bg-gray-400', 'cursor-not-allowed')
        startButton.classList.remove('bg-blue-600', 'hover:bg-blue-700')
      } else {
        startButton.classList.remove('bg-gray-400', 'cursor-not-allowed')
        startButton.classList.add('bg-blue-600', 'hover:bg-blue-700')
      }
    }

    if (clearButton) {
      clearButton.disabled = this.isProcessing
      if (this.isProcessing) {
        clearButton.classList.add('opacity-50', 'cursor-not-allowed')
      } else {
        clearButton.classList.remove('opacity-50', 'cursor-not-allowed')
      }
    }
  }

  showError(message) {
    this.error = message
    this.updateUI()
  }

  getPendingCount() {
    return this.items.filter(item => item.status === 'pending' || item.status === 'error').length
  }

  escapeHtml(text) {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
}
