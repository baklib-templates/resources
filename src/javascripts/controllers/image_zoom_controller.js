import { Controller } from "@hotwired/stimulus"

// 视图缩放控制器（与文件的显示方式无关， 展示方通过css处理展示，比如换行等）
// targets 应指定
//  - 缩放控件 (zoomControl): 缩放滑块控件
//  - 视图容器 (view): 视图容器元素，flex布局的容器，子元素是文件项，自动换行显示
//    - 文件项 (item): 文件项元素，缩放改变的就是这个元素的大小
export default class extends Controller {
  static targets = ["zoomControl", "view", 'item', "errorMessage", "value"]
  static values = {

  }

  initialize() {
    this.savedZoom = localStorage.getItem('image-zoom') || '100'
    // 根据window.innerWidth计算默认宽度，在不同设备上显示不同的宽度，使item有默认的宽高，缩放基于此参数进行处理
    this.baseItemSize = this.calculateBaseItemSize()
  }

  // 根据窗口宽度计算基础尺寸
  calculateBaseItemSize() {
    const windowWidth = window.innerWidth
    const space = 16
    if (!this.hasViewTarget) return 0
    console.log('calculateBaseItemSize', windowWidth)

    const containerWidth = this.viewTarget.getBoundingClientRect().width
    const containerPadding = parseFloat(getComputedStyle(this.viewTarget).paddingLeft) * 2

    if (windowWidth < 480) {
      return containerWidth - containerPadding
    }
    // 移动设备 (< 768px): 较小的基础尺寸
    if (windowWidth < 768) {
      return (containerWidth - containerPadding - space) / 2
    }
    // 平板设备 (768px - 1024px): 中等基础尺寸
    else if (windowWidth < 1024) {
      console.log('768-1024')
      return (containerWidth - containerPadding - (space * 3)) / 4
    }
    // 桌面设备 (1024px - 1366px)
    else if (windowWidth >= 1024 && windowWidth < 1366) {
      console.log('1024-1366')
      return (containerWidth - containerPadding - (space * 3)) / 4
    }
    else if (windowWidth >= 1366 && windowWidth < 1920) {
      console.log('1366-1920')
      return (containerWidth - containerPadding - (space * 3)) / 4
    }
    // 桌面设备 (> 1920px)
    else if (windowWidth >= 1920 && windowWidth < 2560) {
      console.log('1920-2560')
      return (containerWidth - containerPadding - (space * 3)) / 4
    }
    else {
      return 400
    }
  }

  connect() {
    // 恢复之前保存的缩放值
    if (this.hasZoomControlTarget) {
      this.zoomControlTarget.value = this.savedZoom
      this.updateValue(this.savedZoom)
      this.applyZoom(this.savedZoom)
    } else {
      return
    }

    // view target 应添加 x-cloak 属性，在connect时移除，避免view/item加载时闪烁
    if (this.hasViewTarget) this.viewTarget.removeAttribute('x-cloak')

    // 监听窗口大小变化，实现响应式调整（使用防抖优化性能）
    this.handleResize = this.debounce(() => {
      // 重新计算基础尺寸
      this.baseItemSize = this.calculateBaseItemSize()

      if (this.hasZoomControlTarget) {
        const currentZoom = this.zoomControlTarget.value
        this.applyZoom(currentZoom)
      }
    }, 150)

    window.addEventListener('resize', this.handleResize)
  }

  viewTargetConnected() {
    if (!this.hasZoomControlTarget) return
    if (this.hasViewTarget) {
      this.viewTarget.removeAttribute('x-cloak')

      const currentZoom = this.zoomControlTarget.value
      this.applyZoom(currentZoom)

      this.baseItemSize = this.calculateBaseItemSize()
    }
  }

  disconnect() {
    // 清理事件监听
    window.removeEventListener('resize', this.handleResize)
    if (this.handleTurboFrameLoad) {
      document.removeEventListener('turbo:frame-load', this.handleTurboFrameLoad)
    }
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
    const zoom = event.target.value
    this.updateValue(zoom)
    this.applyZoom(zoom)

    // 保存到 localStorage
    localStorage.setItem('image-zoom', zoom)
  }

  updateValue(zoom) {
    if (this.hasValueTarget) {
      this.valueTarget.textContent = `${zoom}%`
    }
  }

  // 重置缩放值到 100%
  reset(event) {
    event.preventDefault()
    const defaultZoom = '100'

    // 更新滑块值
    if (this.hasZoomControlTarget) {
      this.zoomControlTarget.value = defaultZoom
    }

    // 更新显示值
    this.updateValue(defaultZoom)

    // 应用缩放
    this.applyZoom(defaultZoom)

    // 保存到 localStorage
    localStorage.setItem('image-zoom', defaultZoom)
  }

  // 增加缩放
  zoomIn(event) {
    event.preventDefault()
    if (!this.hasZoomControlTarget) return

    const currentZoom = parseInt(this.zoomControlTarget.value)
    const min = parseInt(this.zoomControlTarget.min) || 50
    const max = parseInt(this.zoomControlTarget.max) || 200
    const step = parseInt(this.zoomControlTarget.step) || 10

    const newZoom = Math.min(max, currentZoom + step)
    this.zoomControlTarget.value = newZoom
    this.updateValue(newZoom.toString())
    this.applyZoom(newZoom.toString())

    // 保存到 localStorage
    localStorage.setItem('image-zoom', newZoom.toString())
  }

  // 减少缩放
  zoomOut(event) {
    event.preventDefault()
    if (!this.hasZoomControlTarget) return

    const currentZoom = parseInt(this.zoomControlTarget.value)
    const min = parseInt(this.zoomControlTarget.min) || 50
    const max = parseInt(this.zoomControlTarget.max) || 200
    const step = parseInt(this.zoomControlTarget.step) || 10

    const newZoom = Math.max(min, currentZoom - step)
    this.zoomControlTarget.value = newZoom
    this.updateValue(newZoom.toString())
    this.applyZoom(newZoom.toString())

    // 保存到 localStorage
    localStorage.setItem('image-zoom', newZoom.toString())
  }

  applyZoom(zoom) {
    requestAnimationFrame(() => {
      const zoomValue = parseInt(zoom) / 100
      // 设置 CSS 变量供样式使用（与文件的显示方式无关，展示方通过css处理展示）
      document.documentElement.style.setProperty('--view-zoom', zoomValue)

      if (!this.hasViewTarget) return

      // 应用缩放：直接修改属于该视图容器的文件项大小
      this.applyViewZoom(this.viewTarget, zoomValue)
    })
  }

  applyViewZoom(view, zoomValue) {
    if (this.hasItemTarget) {
      this.itemTargets.forEach(item => {
        // 检查该项是否属于当前的 view（检查父元素）
        if (!view.contains(item)) return

        // 使用计算的基础尺寸进行缩放
        const itemSize = this.baseItemSize * zoomValue
        item.style.width = `${itemSize}px`
        // item.style.height = `${itemSize}px`
      })
    }
  }
}
