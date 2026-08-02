import { Controller } from "@hotwired/stimulus"
import { getFilenameWithExtension } from "../utils"
import notify from "../utils/notify"

// 列表视图批量选择 / 下载
export default class extends Controller {
  static targets = ["selectAll", "checkbox", "count", "downloadBtn"]

  connect() {
    this._downloading = false
    this.updateUI()
  }

  stop(event) {
    event.stopPropagation()
  }

  toggle() {
    this.updateUI()
  }

  toggleSelectAll(event) {
    const checked = event.target.checked
    this.checkboxTargets.forEach((cb) => {
      if (!cb.disabled) cb.checked = checked
    })
    this.updateUI()
  }

  updateUI() {
    const enabled = this.checkboxTargets.filter((cb) => !cb.disabled)
    const selected = this.checkboxTargets.filter((cb) => cb.checked)

    if (this.hasCountTarget) {
      this.countTarget.textContent = String(selected.length)
    }

    if (this.hasSelectAllTarget) {
      const allChecked = enabled.length > 0 && enabled.every((cb) => cb.checked)
      const someChecked = selected.length > 0
      this.selectAllTarget.checked = allChecked
      this.selectAllTarget.indeterminate = someChecked && !allChecked
    }

    if (this.hasDownloadBtnTarget) {
      this.downloadBtnTarget.disabled = selected.length === 0 || this._downloading
    }
  }

  async download(event) {
    event.preventDefault()
    if (this._downloading) return

    const selected = this.checkboxTargets.filter((cb) => cb.checked && !cb.disabled)
    if (selected.length === 0) {
      notify(this.element.dataset.emptyMessage || "请先选择要下载的资源")
      return
    }

    this._downloading = true
    this.updateUI()
    if (this.hasDownloadBtnTarget) {
      this.downloadBtnTarget.classList.add("loading")
    }

    let successCount = 0
    let failCount = 0

    try {
      for (let i = 0; i < selected.length; i += 1) {
        const cb = selected[i]
        try {
          await this.downloadOne(cb)
          successCount += 1
        } catch (error) {
          console.error("批量下载单项失败:", error)
          failCount += 1
        }
        // 间隔触发，降低浏览器拦截连续下载的概率
        if (i < selected.length - 1) {
          await this.wait(350)
        }
      }

      if (failCount === 0) {
        notify(this.element.dataset.successMessage || "文件已开始下载，请在浏览器下载记录中查看")
      } else if (successCount === 0) {
        notify(this.element.dataset.failMessage || "下载失败，请稍后重试")
      } else {
        notify(
          (this.element.dataset.partialMessage || "部分文件下载失败：成功 %s，失败 %f")
            .replace("%s", String(successCount))
            .replace("%f", String(failCount))
        )
      }
    } finally {
      this._downloading = false
      if (this.hasDownloadBtnTarget) {
        this.downloadBtnTarget.classList.remove("loading")
      }
      this.updateUI()
    }
  }

  downloadOne(checkbox) {
    const endpoint = checkbox.dataset.downloadUrl
    if (!endpoint) {
      return Promise.reject(new Error("缺少下载地址"))
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = () => {
        try {
          if (xhr.status !== 200) {
            throw new Error(`HTTP error! status: ${xhr.status}`)
          }
          const data = JSON.parse(xhr.responseText)
          if (!data.success) {
            throw new Error(data.error || "获取下载链接失败")
          }
          const downloadUrl = data.url || data.download_url || data.file_url
          if (!downloadUrl) {
            throw new Error("响应中未找到下载链接")
          }
          this.triggerBrowserDownload(
            downloadUrl,
            getFilenameWithExtension(checkbox.dataset.filename || "", checkbox.dataset.contentType || "")
          )
          resolve()
        } catch (error) {
          reject(error)
        }
      }
      xhr.onerror = () => reject(new Error("网络请求错误"))
      xhr.open("GET", endpoint, true)
      xhr.send()
    })
  }

  triggerBrowserDownload(downloadUrl, filename) {
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = filename || ""
    link.rel = "noopener"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
