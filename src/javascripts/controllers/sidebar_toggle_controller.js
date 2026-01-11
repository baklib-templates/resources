import { Controller } from "@hotwired/stimulus"

// 侧边栏切换控制器
export default class extends Controller {
  static values = {
    sidebarId: { type: String, default: 'main-sidebar' }
  }

  connect() {
    this.sidebar = document.getElementById(this.sidebarIdValue || 'main-sidebar')
    if (!this.sidebar) return

    // 记录初始屏幕尺寸
    this.lastScreenSize = window.innerWidth < 1024 ? 'mobile' : 'desktop'

    // 根据屏幕尺寸设置初始状态（仅初始化时）
    this.initializeSidebarState()

    // 监听窗口 resize 事件（使用防抖处理）
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  disconnect() {
    window.removeEventListener('resize', this.handleResize.bind(this))
    // 清理遮罩层
    if (this.overlay) {
      this.overlay.remove()
    }
    // 恢复 body 滚动
    document.body.style.overflow = ''
  }

  toggle(event) {
    event.preventDefault()
    if (!this.sidebar) return

    const isMobile = window.innerWidth < 1024 // lg breakpoint

    if (isMobile) {
      // 移动端：切换 translate-x-full 类来控制显示/隐藏
      const isHidden = this.sidebar.classList.contains('-translate-x-full')

      // 标记为用户手动操作（在切换之前标记，防止被其他逻辑重置）
      this.sidebar.setAttribute('data-user-toggled', 'true')

      if (isHidden) {
        // 展开侧边栏：移除 -translate-x-full，侧边栏会滑入显示
        this.sidebar.classList.remove('-translate-x-full')
        this.showOverlay()
      } else {
        // 折叠侧边栏：添加 -translate-x-full，侧边栏会滑出隐藏
        this.sidebar.classList.add('-translate-x-full')
        this.hideOverlay()
      }
      // 移动端不保存状态到 localStorage
    } else {
      // 桌面端：切换 hidden 类
      const isCurrentlyHidden = this.sidebar.classList.contains('hidden')

      // 标记为用户手动操作
      this.sidebar.setAttribute('data-user-toggled', 'true')

      if (isCurrentlyHidden) {
        this.sidebar.classList.remove('hidden')
      } else {
        this.sidebar.classList.add('hidden')
      }
      // 桌面端保存用户偏好
      const isHidden = this.sidebar.classList.contains('hidden')
      localStorage.setItem('sidebar-hidden', isHidden)
    }
  }

  showOverlay() {
    if (!this.overlay) {
      this.overlay = document.createElement('div')
      this.overlay.id = 'sidebar-overlay'
      this.overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden hidden'
      this.overlay.addEventListener('click', () => {
        this.toggle({ preventDefault: () => {} })
      })
      document.body.appendChild(this.overlay)
    }
    this.overlay.classList.remove('hidden')
    // 禁用 body 滚动
    document.body.style.overflow = 'hidden'
  }

  hideOverlay() {
    if (this.overlay) {
      this.overlay.classList.add('hidden')
    }
    // 恢复 body 滚动
    document.body.style.overflow = ''
  }

  initializeSidebarState() {
    if (!this.sidebar) return

    const isMobile = window.innerWidth < 1024 // lg breakpoint

    if (isMobile) {
      // 移动端：默认隐藏（translate-x-full）
      // 侧边栏初始类已经包含 -translate-x-full，确保状态正确
      if (!this.sidebar.classList.contains('-translate-x-full')) {
        this.sidebar.classList.add('-translate-x-full')
      }
      this.hideOverlay()
    } else {
      // 桌面端：恢复用户之前保存的偏好
      const sidebarHidden = localStorage.getItem('sidebar-hidden') === 'true'
      if (sidebarHidden) {
        this.sidebar.classList.add('hidden')
      } else {
        this.sidebar.classList.remove('hidden')
      }
      // 确保移除移动端的 translate-x
      this.sidebar.classList.remove('-translate-x-full')
      this.hideOverlay()
    }
  }

  updateSidebarState() {
    if (!this.sidebar) return

    const isMobile = window.innerWidth < 1024 // lg breakpoint
    const wasMobile = this.lastScreenSize === 'mobile'
    const screenSizeChanged = wasMobile !== isMobile

    // 更新屏幕尺寸记录
    this.lastScreenSize = isMobile ? 'mobile' : 'desktop'

    // 只在屏幕尺寸切换时更新状态
    if (screenSizeChanged) {
      if (isMobile) {
        // 切换到移动端：使用 translate-x 控制，默认隐藏
        this.sidebar.classList.remove('hidden')
        // 如果用户没有手动操作过，则默认隐藏
        // 如果用户已经操作过（data-user-toggled 存在），保持当前状态不变
        if (!this.sidebar.hasAttribute('data-user-toggled')) {
          this.sidebar.classList.add('-translate-x-full')
          this.hideOverlay()
        }
        // 如果用户已经操作过，保持当前状态（展开或折叠），不做任何修改
      } else {
        // 切换到桌面端：移除 translate-x，使用 hidden 类控制
        this.sidebar.classList.remove('-translate-x-full')
        this.hideOverlay()

        // 恢复用户之前保存的偏好（仅在桌面端）
        const sidebarHidden = localStorage.getItem('sidebar-hidden') === 'true'
        if (sidebarHidden) {
          this.sidebar.classList.add('hidden')
        } else {
          this.sidebar.classList.remove('hidden')
        }
        // 清除用户操作标记，因为已经切换到桌面端
        this.sidebar.removeAttribute('data-user-toggled')
      }
    }
    // 如果屏幕尺寸没有变化，不做任何操作，保持用户当前的状态
  }

  handleResize() {
    // 防抖处理
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
      this.updateSidebarState()
    }, 150)
  }
}
