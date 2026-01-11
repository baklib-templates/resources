import { Controller } from "@hotwired/stimulus"

// 视图模式切换控制器（磁贴/图标模式）
export default class extends Controller {
  connect() {
    // 恢复之前保存的模式
    const savedMode = localStorage.getItem('grid-view-mode') || 'tile'
    this.switchMode(savedMode, false)
  }

  toggle(event) {
    event.preventDefault()
    const mode = event.currentTarget.dataset.viewMode
    this.switchMode(mode, true)
  }

  switchMode(mode, save = true) {
    const gridView = document.getElementById('grid-view')
    if (!gridView) return

    // 更新 grid-view 的 data-view-mode 属性
    gridView.setAttribute('data-view-mode', mode)

    // 更新按钮状态
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
      const btnMode = btn.dataset.viewMode
      if (btnMode === mode) {
        // 选中状态
        btn.classList.add('bg-primary-100', 'dark:bg-primary-900/20', 'border-primary', 'text-primary', 'dark:text-primary')
        btn.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-400')
      } else {
        // 未选中状态
        btn.classList.remove('bg-primary-100', 'dark:bg-primary-900/20', 'border-primary', 'text-primary', 'dark:text-primary')
        btn.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-600', 'dark:text-gray-400')
      }
    })

    // 触发缩放重新计算（因为模式改变可能影响列数）
    const zoomController = document.querySelector('[data-controller*="image-zoom"]')
    if (zoomController) {
      const zoomSlider = zoomController.querySelector('input[type="range"]')
      if (zoomSlider) {
        // 触发 change 事件来重新应用缩放
        zoomSlider.dispatchEvent(new Event('input'))
      }
    }

    // 保存到 localStorage
    if (save) {
      localStorage.setItem('grid-view-mode', mode)
    }
  }
}
