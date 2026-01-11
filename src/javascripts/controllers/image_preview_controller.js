import { Controller } from "@hotwired/stimulus"

// 图片预览控制器 - 支持右侧详情面板预览
export default class extends Controller {
  static values = {
    url: String,
    title: String,
    createdAt: String,
    fileSize: String,
    fileType: String,
    location: String,
    contains: String,
    lastModified: String,
    lastOpened: String
  }

  connect() {
    this.element.style.cursor = 'pointer'
  }

  click(event) {
    event.preventDefault()
    this.showSidebarPreview()
  }

  showSidebarPreview() {
    // 检测是否为移动端
    const isMobile = window.innerWidth < 768 // md breakpoint

    // 格式化日期时间
    const formatDateTime = (dateString) => {
      if (!dateString) return '未知'
      try {
        const date = new Date(dateString)
        return date.toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }).replace(/\//g, '-')
      } catch (e) {
        return dateString
      }
    }

    // 获取元数据
    const createdAt = formatDateTime(this.createdAtValue || this.element.dataset.createdAt)
    const fileSize = this.fileSizeValue || this.element.dataset.fileSize || '未知'
    const fileType = this.fileTypeValue || this.element.dataset.fileType || '未知'
    const location = this.locationValue || this.element.dataset.location || '照片库/'
    const contains = this.containsValue || this.element.dataset.contains || '0个文件, 0个文件夹, 共0 MB'
    const lastModified = formatDateTime(this.lastModifiedValue || this.element.dataset.lastModified || this.createdAtValue)
    const lastOpened = formatDateTime(this.lastOpenedValue || this.element.dataset.lastOpened || new Date().toISOString())

    // 详情面板内容HTML
    const contentHTML = `
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100">详情信息</h2>
          <button class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  data-action="click->image-preview#close">
            <i class="ri-close-line text-2xl"></i>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">素材库</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">上次打开时间:</span>
                <span class="text-gray-900 dark:text-gray-100">${lastOpened}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">文件大小:</span>
                <span class="text-gray-900 dark:text-gray-100">${fileSize}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500 dark:text-gray-400">包含:</span>
                <span class="text-gray-900 dark:text-gray-100">${contains}</span>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 text-sm">
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">文件名</div>
              <div class="text-gray-900 dark:text-gray-100">${this.titleValue || '未命名'}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">创建时间</div>
              <div class="text-gray-900 dark:text-gray-100">${createdAt}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">位置</div>
              <div class="text-gray-900 dark:text-gray-100">${location}</div>
            </div>
            <div>
              <div class="text-gray-500 dark:text-gray-400 mb-1">上次修改时间</div>
              <div class="text-gray-900 dark:text-gray-100">${lastModified}</div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <a href="${this.urlValue}" class="block w-full px-4 py-2 border bg-primary hover:bg-primary/90 text-primary-content text-center rounded-md transition-colors">
              <i class="ri-download-line mr-2"></i>
              下载
            </a>
          </div>
        </div>
      </div>
    `

    if (isMobile) {
      // 移动端：显示全屏modal
      let modal = document.getElementById('image-preview-modal')
      if (!modal) {
        modal = document.createElement('div')
        modal.id = 'image-preview-modal'
        modal.className = 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
        modal.innerHTML = `
          <div class="absolute inset-0" data-action="click->image-preview#close"></div>
          <aside class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
            ${contentHTML}
          </aside>
        `
        document.body.appendChild(modal)
        // 添加背景点击关闭事件
        const backdrop = modal.querySelector('.absolute.inset-0')
        if (backdrop) {
          backdrop.addEventListener('click', () => this.close())
        }
      } else {
        const aside = modal.querySelector('aside')
        if (aside) {
          aside.innerHTML = contentHTML
        }
        // 更新背景点击关闭事件
        const backdrop = modal.querySelector('.absolute.inset-0')
        if (backdrop) {
          backdrop.replaceWith(backdrop.cloneNode(true))
          backdrop.addEventListener('click', () => this.close())
        }
      }
      modal.classList.remove('hidden')
      // 防止背景滚动
      document.body.style.overflow = 'hidden'
    } else {
      // PC端：显示右侧面板
      let sidebar = document.getElementById('image-preview-sidebar')
      if (!sidebar) {
        sidebar = document.createElement('aside')
        sidebar.id = 'image-preview-sidebar'
        sidebar.className = 'flex-0 w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto'
        const main = document.querySelector('main')
        if (main) {
          const flexContainer = main.querySelector('.flex-1.flex')
          if (flexContainer) {
            flexContainer.appendChild(sidebar)
          }
        }
      }
      sidebar.innerHTML = contentHTML
      sidebar.classList.remove('hidden')
    }

    // 添加关闭事件监听器
    const closeButton = (isMobile ? document.getElementById('image-preview-modal') : document.getElementById('image-preview-sidebar'))?.querySelector('[data-action*="close"]')
    if (closeButton) {
      const newCloseButton = closeButton.cloneNode(true)
      closeButton.parentNode.replaceChild(newCloseButton, closeButton)
      newCloseButton.addEventListener('click', () => {
        this.close()
      })
    }
  }

  close() {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      const modal = document.getElementById('image-preview-modal')
      if (modal) {
        modal.classList.add('hidden')
      }
      // 恢复背景滚动
      document.body.style.overflow = ''
    } else {
      const sidebar = document.getElementById('image-preview-sidebar')
      if (sidebar) {
        sidebar.classList.add('hidden')
      }
    }
  }
}

