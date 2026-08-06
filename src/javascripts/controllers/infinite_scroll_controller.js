import { Controller } from "@hotwired/stimulus"

/**
 * 资源列表无限滚动：滚动到哨兵时请求下一页并追加到 [data-attachments-list]。
 * 挂在 main（overflow 滚动容器）上；监听 #attachments_frame 的 turbo:frame-load。
 */
export default class extends Controller {
  connect() {
    this.loading = false
    this.generation = 0
    this.observer = null
    this.frame = document.getElementById("attachments_frame")

    this.onFrameLoad = this.onFrameLoad.bind(this)
    this.onRequest = this.onRequest.bind(this)
    this.onIntersect = this.onIntersect.bind(this)

    this.frame?.addEventListener("turbo:frame-load", this.onFrameLoad)
    document.addEventListener("infinite-scroll:request", this.onRequest)

    // 首屏若已渲染（非 :src 异步），也尝试挂载
    requestAnimationFrame(() => this.observeSentinel())
  }

  disconnect() {
    this.teardownObserver()
    this.frame?.removeEventListener("turbo:frame-load", this.onFrameLoad)
    document.removeEventListener("infinite-scroll:request", this.onRequest)
  }

  onFrameLoad(event) {
    if (event?.target && event.target.id !== "attachments_frame") return
    this.generation += 1
    this.loading = false
    this.observeSentinel()
  }

  onRequest(event) {
    const detail = event?.detail || {}
    this.loadMore({ reason: detail.reason || "request" })
  }

  sentinel() {
    return this.frame?.querySelector("[data-infinite-scroll-sentinel]") || null
  }

  listRoot() {
    return this.frame?.querySelector("[data-attachments-list]") || null
  }

  teardownObserver() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
  }

  observeSentinel() {
    this.teardownObserver()
    const sentinel = this.sentinel()
    if (!sentinel) return

    const nextPage = this.parsePage(sentinel.dataset.nextPage)
    if (!nextPage) return

    this.observer = new IntersectionObserver(this.onIntersect, {
      root: this.element,
      rootMargin: "320px 0px",
      threshold: 0
    })
    this.observer.observe(sentinel)
  }

  onIntersect(entries) {
    const entry = entries[0]
    if (!entry?.isIntersecting) return
    this.loadMore({ reason: "scroll" })
  }

  parsePage(value) {
    const n = parseInt(value, 10)
    return Number.isFinite(n) && n > 0 ? n : null
  }

  setLoadingVisible(visible) {
    const el = this.sentinel()?.querySelector("[data-infinite-scroll-loading]")
    if (!el) return
    if (visible) el.removeAttribute("hidden")
    else el.setAttribute("hidden", "")
  }

  buildNextUrl(nextPage) {
    const frameSrc = this.frame?.getAttribute("src") || this.frame?.src || ""
    if (!frameSrc) return null

    const url = new URL(frameSrc, window.location.origin)
    url.searchParams.set("_page", String(nextPage))
    url.searchParams.set("append", "1")
    return url.toString()
  }

  async loadMore({ reason } = {}) {
    if (this.loading) return false

    const sentinel = this.sentinel()
    const nextPage = this.parsePage(sentinel?.dataset.nextPage)
    if (!nextPage) {
      document.dispatchEvent(new CustomEvent("infinite-scroll:exhausted", { bubbles: true }))
      return false
    }

    const list = this.listRoot()
    if (!list) return false

    const requestUrl = this.buildNextUrl(nextPage)
    if (!requestUrl) return false

    this.loading = true
    this.setLoadingVisible(true)
    const generation = this.generation

    try {
      const response = await fetch(requestUrl, {
        headers: {
          Accept: "text/html",
          "Turbo-Frame": "attachments_frame"
        },
        credentials: "same-origin"
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      if (generation !== this.generation) return false

      const html = await response.text()
      if (generation !== this.generation) return false

      const doc = new DOMParser().parseFromString(html, "text/html")
      const pageRoot = doc.querySelector("[data-infinite-scroll-page]") || doc.querySelector("#attachments_frame") || doc.body
      const incomingList = pageRoot.querySelector("[data-attachments-list]")
      const incomingSentinel = pageRoot.querySelector("[data-infinite-scroll-sentinel]")

      let appended = 0
      if (incomingList) {
        const nodes = Array.from(incomingList.children).filter(
          (node) => !node.hasAttribute("data-attachments-empty")
        )
        nodes.forEach((node) => {
          const imported = document.importNode(node, true)
          list.appendChild(imported)
          if (window.Alpine?.initTree) {
            window.Alpine.initTree(imported)
          }
          appended += 1
        })
      }

      if (incomingSentinel) {
        const nextSentinel = document.importNode(incomingSentinel, true)
        sentinel.replaceWith(nextSentinel)
      } else if (sentinel.isConnected) {
        sentinel.dataset.nextPage = ""
      }

      document.dispatchEvent(
        new CustomEvent("infinite-scroll:appended", {
          bubbles: true,
          detail: { page: nextPage, count: appended, reason: reason || "scroll" }
        })
      )

      // 缩放等依赖列表 DOM 的控制器
      document.dispatchEvent(new CustomEvent("attachments:appended", { bubbles: true }))

      this.loading = false
      this.setLoadingVisible(false)
      this.observeSentinel()

      if (!this.parsePage(this.sentinel()?.dataset.nextPage)) {
        document.dispatchEvent(new CustomEvent("infinite-scroll:exhausted", { bubbles: true }))
      }

      return appended > 0
    } catch (error) {
      console.error("infinite-scroll loadMore failed:", error)
      this.loading = false
      this.setLoadingVisible(false)
      document.dispatchEvent(
        new CustomEvent("infinite-scroll:error", {
          bubbles: true,
          detail: { error }
        })
      )
      return false
    }
  }
}
