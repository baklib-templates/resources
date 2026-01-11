import { Controller } from "@hotwired/stimulus"

// 更多菜单控制器
export default class extends Controller {
  static targets = ["menu"]

  toggle(event) {
    event.preventDefault()
    event.stopPropagation()

    if (this.hasMenuTarget) {
      this.menuTarget.classList.toggle('hidden')

      // 点击外部关闭菜单
      if (!this.menuTarget.classList.contains('hidden')) {
        setTimeout(() => {
          document.addEventListener('click', this.closeMenu.bind(this), { once: true })
        }, 0)
      }
    }
  }

  closeMenu(event) {
    if (this.hasMenuTarget && !this.menuTarget.contains(event.target) && !this.element.contains(event.target)) {
      this.menuTarget.classList.add('hidden')
    }
  }
}
