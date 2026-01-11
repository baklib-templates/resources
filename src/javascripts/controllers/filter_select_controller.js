import { Controller } from "@hotwired/stimulus"

// 筛选选择控制器
export default class extends Controller {
  change(event) {
    const select = event.target
    const value = select.value
    const paramName = select.dataset.paramName || 'tag'

    if (value) {
      // 更新 URL 参数
      const url = new URL(window.location.href)
      url.searchParams.set(paramName, value)
      window.location.href = url.toString()
    } else {
      // 移除参数
      const url = new URL(window.location.href)
      url.searchParams.delete(paramName)
      window.location.href = url.toString()
    }
  }
}

