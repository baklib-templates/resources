import { Controller } from "@hotwired/stimulus"

// 文件大小范围筛选控制器
export default class extends Controller {
  static targets = ["minSize", "maxSize"]
  static values = {
    paramName: String
  }

  connect() {
    // 从URL参数中恢复值
    const urlParams = new URLSearchParams(window.location.search)
    const paramName = this.paramNameValue || 'size'

    const minSize = urlParams.get(`${paramName}_min`)
    const maxSize = urlParams.get(`${paramName}_max`)

    if (minSize && this.hasMinSizeTarget) {
      this.minSizeTarget.value = minSize
    }
    if (maxSize && this.hasMaxSizeTarget) {
      this.maxSizeTarget.value = maxSize
    }
  }

  updateFilter() {
    const paramName = this.paramNameValue || 'size'
    const minSize = this.hasMinSizeTarget ? this.minSizeTarget.value : ''
    const maxSize = this.hasMaxSizeTarget ? this.maxSizeTarget.value : ''

    // 更新 URL 参数
    const url = new URL(window.location.href)

    if (minSize) {
      url.searchParams.set(`${paramName}_min`, minSize)
    } else {
      url.searchParams.delete(`${paramName}_min`)
    }

    if (maxSize) {
      url.searchParams.set(`${paramName}_max`, maxSize)
    } else {
      url.searchParams.delete(`${paramName}_max`)
    }

    // 触发页面更新（通过 Alpine.js 的 attachmentsQuery）
    const event = new CustomEvent('file-size-filter-change', {
      detail: {
        minSize: minSize || null,
        maxSize: maxSize || null
      }
    })
    window.dispatchEvent(event)

    // 如果页面有 Alpine.js 的 attachmentsQuery，直接更新它
    if (window.Alpine && document.querySelector('[x-data*="attachmentsQuery"]')) {
      // 通过 Alpine 更新查询参数
      const alpineElement = document.querySelector('[x-data*="attachmentsQuery"]')
      if (alpineElement && alpineElement._x_dataStack) {
        const alpineData = alpineElement._x_dataStack[0]
        if (alpineData && alpineData.attachmentsQuery) {
          if (minSize) {
            alpineData.attachmentsQuery[`${paramName}_min`] = minSize
          } else {
            delete alpineData.attachmentsQuery[`${paramName}_min`]
          }
          if (maxSize) {
            alpineData.attachmentsQuery[`${paramName}_max`] = maxSize
          } else {
            delete alpineData.attachmentsQuery[`${paramName}_max`]
          }
        }
      }
    }
  }
}

