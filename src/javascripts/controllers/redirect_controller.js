import { Controller } from "@hotwired/stimulus"
import { buildUrl, getQueryParams } from "../utils/index"

// 重定向控制器
// 用于处理页面重定向，支持从当前 URL 复制参数到目标 URL
export default class extends Controller {
  static values = {
    // 目标 URL
    targetUrl: { type: String, default: '' },
    // 需要更新的参数（JSON 字符串或对象）
    params: { type: Object, default: {} },
    // 是否使用当前 URL 作为基础（如果为 true，则从当前 URL 复制所有参数，然后应用 params）
    useCurrentUrl: { type: Boolean, default: false },
    // 是否覆盖现有参数（默认 false，即合并参数）
    override: { type: Boolean, default: false },
    // 是否在 connect 时自动执行重定向（默认 true）
    autoRedirect: { type: Boolean, default: true },
    // 是否保留history
    keepHistory: { type: Boolean, default: true }
  }

  connect() {
    if (this.autoRedirectValue) {
      this.redirect()
    }
  }

  redirect() {
    let targetUrl = this.targetUrlValue

    if (!targetUrl) {
      console.warn('RedirectController: targetUrl is required')
      return
    }

    let finalUrl

    // 如果需要使用当前 URL 作为基础
    if (this.useCurrentUrlValue) {
      // 如果指定了 targetUrl，使用 targetUrl 作为基础，但从当前 URL 复制参数
      if (this.targetUrlValue) {
        // 获取当前 URL 的参数
        const currentParams = getQueryParams(window.location.href)
        // 合并当前参数和新参数
        const mergedParams = this.overrideValue
          ? this.paramsValue
          : { ...currentParams, ...this.paramsValue }
        // 使用目标 URL 作为基础，应用合并后的参数
        finalUrl = buildUrl(targetUrl, mergedParams, true)
      } else {
        // 如果没有指定 targetUrl，使用当前 URL 作为基础
        finalUrl = buildUrl(window.location.href, this.paramsValue, this.overrideValue)
      }
    } else {
      // 否则，使用目标 URL 并应用参数
      finalUrl = buildUrl(targetUrl, this.paramsValue, this.overrideValue)
    }

    // 执行重定向
    // 是否保留history
    if (this.keepHistoryValue) {
      window.location.href = finalUrl
    } else {
      window.location.replace(finalUrl)
    }
  }
}

