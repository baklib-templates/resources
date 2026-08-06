import { Controller } from "@hotwired/stimulus"

// 视图缩放控制器（与文件的显示方式无关， 展示方通过css处理展示，比如换行等）
// targets 应指定
//  - 缩放控件 (zoomControl): 缩放滑块控件
//  - 视图容器 (view): 视图容器元素，flex布局的容器，子元素是文件项，自动换行显示
//    - 文件项 (item): 文件项元素，缩放改变的就是这个元素的大小
export default class extends Controller {
  static targets = ["zoomControl", "view", "value"]

  initialize() {
    this.savedZoom = this.normalizeZoom(localStorage.getItem("image-zoom") || "100")
  }

  connect() {
    this.syncZoomControl()
    this.applyZoom(this.savedZoom)

    this.handleResize = this.debounce(() => {
      this.applyZoom(this.getCurrentZoom())
    }, 150)

    this.handleExternalZoom = (event) => {
      const zoom = this.normalizeZoom(`${event.detail?.zoom || this.getCurrentZoom()}`)
      this.syncZoomControl(zoom)
      this.applyZoom(zoom)
    }
    this.handleTurboFrameLoad = (event) => {
      if (event.target?.id === "attachments_frame") {
        this.applyZoom(this.getCurrentZoom())
      }
    }
    this.handleAttachmentsAppended = () => {
      this.applyZoom(this.getCurrentZoom())
    }

    window.addEventListener("resize", this.handleResize)
    window.addEventListener("sidebar-collapsed-status-changed", this.handleResize)
    window.addEventListener("image-zoom:change", this.handleExternalZoom)
    document.addEventListener("turbo:frame-load", this.handleTurboFrameLoad)
    document.addEventListener("attachments:appended", this.handleAttachmentsAppended)
  }

  viewTargetConnected() {
    if (this.hasViewTarget) {
      this.viewTarget.removeAttribute("x-cloak")
      this.applyZoom(this.getCurrentZoom())
    }
  }

  disconnect() {
    window.removeEventListener("resize", this.handleResize)
    window.removeEventListener("sidebar-collapsed-status-changed", this.handleResize)
    window.removeEventListener("image-zoom:change", this.handleExternalZoom)
    document.removeEventListener("turbo:frame-load", this.handleTurboFrameLoad)
    document.removeEventListener("attachments:appended", this.handleAttachmentsAppended)
  }

  // 防抖函数
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  change(event) {
    const zoom = this.normalizeZoom(event.target.value)
    this.updateValue(zoom)
    this.applyZoom(zoom)
    this.broadcastZoom(zoom)
  }

  updateValue(zoom) {
    if (this.hasValueTarget) {
      this.valueTarget.textContent = `${zoom}%`
    }
  }

  // 重置缩放值到 100%
  reset(event) {
    event.preventDefault()
    const defaultZoom = "100"
    this.syncZoomControl(defaultZoom)
    this.updateValue(defaultZoom)
    this.applyZoom(defaultZoom)
    this.broadcastZoom(defaultZoom)
  }

  // 增加缩放
  zoomIn(event) {
    event.preventDefault()
    if (!this.hasZoomControlTarget) return

    const currentZoom = parseInt(this.zoomControlTarget.value)
    const min = parseInt(this.zoomControlTarget.min) || 50
    const max = parseInt(this.zoomControlTarget.max) || 200
    const step = parseInt(this.zoomControlTarget.step) || 5

    const newZoom = Math.min(max, currentZoom + step)
    this.zoomControlTarget.value = newZoom
    this.updateValue(newZoom.toString())
    this.applyZoom(newZoom.toString())
    this.broadcastZoom(newZoom.toString())
  }

  // 减少缩放
  zoomOut(event) {
    event.preventDefault()
    if (!this.hasZoomControlTarget) return

    const currentZoom = parseInt(this.zoomControlTarget.value)
    const min = parseInt(this.zoomControlTarget.min) || 50
    const max = parseInt(this.zoomControlTarget.max) || 200
    const step = parseInt(this.zoomControlTarget.step) || 5

    const newZoom = Math.max(min, currentZoom - step)
    this.zoomControlTarget.value = newZoom
    this.updateValue(newZoom.toString())
    this.applyZoom(newZoom.toString())
    this.broadcastZoom(newZoom.toString())
  }

  applyZoom(zoom) {
    requestAnimationFrame(() => {
      const normalizedZoom = this.normalizeZoom(zoom)
      const zoomValue = parseInt(normalizedZoom, 10) / 100
      const fontZoom = Math.max(0.85, Math.min(1.35, 0.9 + zoomValue * 0.25))
      const thumbZoom = Math.max(0.75, Math.min(1.8, zoomValue))

      if (this.hasViewTarget) {
        this.viewTarget.style.setProperty("--view-zoom", `${zoomValue}`)
        this.viewTarget.style.setProperty("--zoom-font", `${fontZoom}`)
        this.viewTarget.style.setProperty("--zoom-thumb", `${thumbZoom}`)
        this.viewTarget.removeAttribute("x-cloak")
      }

      // 为外层样式预留全局变量
      document.documentElement.style.setProperty("--view-zoom", `${zoomValue}`)
      document.documentElement.style.setProperty("--zoom-font", `${fontZoom}`)
      document.documentElement.style.setProperty("--zoom-thumb", `${thumbZoom}`)
    })
  }

  broadcastZoom(zoom) {
    const normalizedZoom = this.normalizeZoom(zoom)
    localStorage.setItem("image-zoom", normalizedZoom)
    window.dispatchEvent(new CustomEvent("image-zoom:change", { detail: { zoom: normalizedZoom } }))
  }

  syncZoomControl(zoom = this.savedZoom) {
    if (this.hasZoomControlTarget) {
      this.zoomControlTarget.value = zoom
    }
    this.updateValue(zoom)
  }

  getCurrentZoom() {
    if (this.hasZoomControlTarget) {
      return this.normalizeZoom(this.zoomControlTarget.value)
    }

    return this.normalizeZoom(localStorage.getItem("image-zoom") || "100")
  }

  normalizeZoom(value) {
    const parsed = parseInt(value, 10)
    if (Number.isNaN(parsed)) return "100"
    return `${Math.max(50, Math.min(200, parsed))}`
  }
}
