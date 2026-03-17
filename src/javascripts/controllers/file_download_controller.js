import { Controller } from "@hotwired/stimulus"
import { getFilenameWithExtension } from "../utils"
import notify from "../utils/notify";

// 文件下载控制器
// 通过 URL 获取真实下载链接并下载文件
export default class extends Controller {
  static targets = ["icon", "loading"]
  static values = {
    url: String,
    filename: String,
    contentType: String
  }

  download(event) {
    event.preventDefault()

    this.showLoading()

    const xhr = new XMLHttpRequest()

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

        // 获取到真实下载地址后，隐藏 loading，并提示
        this.hideLoading()
        notify("文件已开始下载，请在浏览器下载记录中查看")

        // 开始文件下载
        this.downloadFile(downloadUrl)
      } catch (error) {
        console.error('下载失败:', error)
        this.hideLoading()
        alert(error.message || '下载失败，请稍后重试')
      }
    }

    xhr.onerror = () => {
      console.error('下载失败: 网络请求错误')
      this.hideLoading()
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
  }

  showLoading() {
    if (this.hasLoadingTarget) {
      this.loadingTarget.classList.remove("hidden")
    }
    if (this.hasIconTarget) {
      this.iconTarget.classList.add("hidden")
    }
    if (this.element instanceof HTMLButtonElement) {
      this.element.disabled = true
    }
  }

  hideLoading() {
    if (this.hasLoadingTarget) {
      this.loadingTarget.classList.add("hidden")
    }
    if (this.hasIconTarget) {
      this.iconTarget.classList.remove("hidden")
    }
    if (this.element instanceof HTMLButtonElement) {
      this.element.disabled = false
    }
  }
}
