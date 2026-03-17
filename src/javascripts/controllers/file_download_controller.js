import { Controller } from "@hotwired/stimulus"
import { getFilenameWithExtension } from "../utils"

// 文件下载控制器
// 通过 URL 获取真实下载链接，支持下载进度显示
export default class extends Controller {
  static values = {
    url: String,
    filename: String,
    contentType: String
  }

  download(event) {
    event.preventDefault()

    // 显示进度条
    this.showProgress()

    const xhr = new XMLHttpRequest()

    // // 监听获取链接的进度
    // xhr.addEventListener('progress', (e) => {
    //   if (e.lengthComputable) {
    //     const percentComplete = (e.loaded / e.total) * 100
    //     this.updateProgress(percentComplete)
    //   }
    // })

    xhr.onload = () => {
      try {
        if (xhr.status !== 200) {
          throw new Error(`HTTP error! status: ${xhr.status}`)
        }

        const data = JSON.parse(xhr.responseText)

        // 检查响应状态
        if (!data.success) {
          throw new Error(data.error || '获取下载链接失败')
        }

        // 从 JSON 中获取真实下载地址
        const downloadUrl = data.url || data.download_url || data.file_url

        if (!downloadUrl) {
          throw new Error('响应中未找到下载链接')
        }

        // 重置进度条
        // this.resetProgress()

        // 开始文件下载
        this.downloadFile(downloadUrl)
      } catch (error) {
        console.error('下载失败:', error)
        this.hideProgress()
        alert(error.message || '下载失败，请稍后重试')
      }
    }

    xhr.onerror = () => {
      console.error('下载失败: 网络请求错误')
      this.hideProgress()
      alert('下载失败，请稍后重试')
    }

    // 发送请求获取下载链接
    xhr.open('GET', this.urlValue, true)
    xhr.send()
  }

  downloadFile(downloadUrl) {
    const link = document.createElement('a')
    link.href = downloadUrl

    const fullFilename = getFilenameWithExtension(this.filenameValue, this.contentTypeValue)
    link.download = fullFilename || ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    this.hideProgress()
  }

  showProgress() {
    let progressBar = this.element.querySelector('.download-progress')

    if (!progressBar) {
      progressBar = document.createElement('div')
      progressBar.className = 'download-progress'
      progressBar.innerHTML = `
        <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-2">
          <div class="download-progress-bar bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
        <p class="text-xs text-gray-500 mt-1"><span class="progress-text">0</span>%</p>
      `
      this.element.appendChild(progressBar)
    } else {
      progressBar.style.display = 'block'
    }
  }

  updateProgress(percent) {
    const progressBar = this.element.querySelector('.download-progress-bar')
    const progressText = this.element.querySelector('.progress-text')

    if (progressBar) {
      progressBar.style.width = `${percent}%`
    }

    if (progressText) {
      progressText.textContent = Math.round(percent)
    }
  }

  resetProgress() {
    const progressBar = this.element.querySelector('.download-progress-bar')
    const progressText = this.element.querySelector('.progress-text')

    if (progressBar) {
      progressBar.style.width = '0%'
    }

    if (progressText) {
      progressText.textContent = '0'
    }
  }

  hideProgress() {
    const progressBar = this.element.querySelector('.download-progress')

    if (progressBar) {
      setTimeout(() => {
        progressBar.style.display = 'none'
      }, 500)
    }
  }
}
