import { Controller } from "@hotwired/stimulus"

// 视图切换控制器
export default class extends Controller {
  connect() {
    // 初始化视图状态
    // 优先使用 localStorage 中保存的值
    // 如果不存在或为空，则使用页面 schema 中设置的默认值
    let savedView = localStorage.getItem('picture-portal-view')

    // 如果 localStorage 中没有值或为空，使用 schema 中的默认值
    if (!savedView || savedView === '') {
      const container = document.querySelector('[data-default-view-mode]')
      if (container && container.dataset.defaultViewMode) {
        savedView = container.dataset.defaultViewMode
        // 确保值只可能是 'grid' 或 'list'
        // 如果 schema 返回的是中文标签，需要映射
        if (savedView === '网格' || savedView === 'Grid') {
          savedView = 'grid'
        } else if (savedView === '列表' || savedView === 'List') {
          savedView = 'list'
        }
        // 如果值不是 'grid' 或 'list'，使用默认值
        if (savedView !== 'grid' && savedView !== 'list') {
          savedView = 'grid'
        }
      } else {
        // 如果没有找到容器或属性，使用默认值 'grid'
        savedView = 'grid'
      }
    } else {
      // 如果 localStorage 中有值，确保只使用 'grid' 或 'list'
      // 清理旧的不兼容值（如 'slider' 等）
      // 'card' 映射为 'grid'，但保留 'card' 用于兼容 search.liquid
      if (savedView === 'card') {
        savedView = 'grid'
      } else if (savedView !== 'grid' && savedView !== 'list') {
        // 如果值不是 'grid' 或 'list'，重置为默认值
        savedView = 'grid'
      }
    }

    this.switchView(savedView)
  }

  toggle(event) {
    event.preventDefault()
    const view = this.element.dataset.view
    this.switchView(view)
  }

  switchView(view) {
    // 更新按钮状态
    document.querySelectorAll('.view-toggle').forEach(btn => {
      if (btn.dataset.view === view) {
        // 选中状态：使用 primary 主题颜色
        btn.classList.add('bg-primary-100', 'dark:bg-primary-900/20', 'border-primary', 'text-primary', 'dark:text-primary')
        btn.classList.remove('bg-white', 'dark:bg-gray-800', 'border-gray-300', 'dark:border-gray-600')
      } else {
        // 未选中状态：恢复默认样式
        btn.classList.remove('bg-primary-100', 'dark:bg-primary-900/20', 'border-primary', 'text-primary', 'dark:text-primary')
        btn.classList.add('bg-white', 'dark:bg-gray-800', 'border-gray-300', 'dark:border-gray-600')
      }
    })

    // 切换视图容器
    // 支持 'grid-view' 和 'card-view'（向后兼容）
    const gridView = document.getElementById('grid-view') || document.getElementById('card-view')
    const listView = document.getElementById('list-view')

    if (view === 'grid' || view === 'card') {
      if (gridView) {
        gridView.classList.remove('hidden')
        gridView.style.display = ''
      }
      if (listView) {
        listView.classList.add('hidden')
        listView.style.display = 'none'
      }
    } else if (view === 'list') {
      if (gridView) {
        gridView.classList.add('hidden')
        gridView.style.display = 'none'
      }
      if (listView) {
        listView.classList.remove('hidden')
        listView.style.display = ''
      }
    }

    // 保存当前选中的 checkbox 状态
    const checkedValues = new Set()
    const currentCheckboxes = document.querySelectorAll('.batch-checkbox:checked')
    currentCheckboxes.forEach(cb => {
      checkedValues.add(cb.value)
    })

    // 更新复选框显示（网格视图和列表视图都显示 checkbox）
    const checkboxes = document.querySelectorAll('.batch-checkbox')
    if (checkboxes.length > 0) {
      checkboxes.forEach(cb => {
        // 网格视图和列表视图都显示 checkbox
        cb.style.display = ''
        // 恢复之前选中的状态
        if (checkedValues.has(cb.value)) {
          cb.checked = true
        }
      })
    }

    // 更新全选 checkbox 的状态
    const selectAllCheckbox = document.querySelector('.select-all-checkbox')
    if (selectAllCheckbox && checkboxes.length > 0) {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked)
      const someChecked = Array.from(checkboxes).some(cb => cb.checked)
      selectAllCheckbox.checked = allChecked
      selectAllCheckbox.indeterminate = !allChecked && someChecked
    }

    // 更新批量操作按钮的显示状态
    const batchActions = document.getElementById('batch-actions')
    if (batchActions) {
      const hasChecked = Array.from(checkboxes).some(cb => cb.checked)
      if (hasChecked) {
        batchActions.style.display = 'flex'
      } else {
        batchActions.style.display = 'none'
      }
    }

    // 保存视图偏好（只保存 'grid' 或 'list'）
    // 确保值只可能是 'grid' 或 'list'
    const viewToSave = (view === 'grid' || view === 'list') ? view : 'grid'
    localStorage.setItem('picture-portal-view', viewToSave)

    // 切换视图后，重新应用缩放
    // 触发缩放控制器的更新
    setTimeout(() => {
      const zoomController = document.querySelector('[data-controller*="image-zoom"]')
      if (zoomController) {
        const slider = zoomController.querySelector('input[type="range"]')
        if (slider) {
          const event = new Event('input', { bubbles: true })
          slider.dispatchEvent(event)
        }
      }
    }, 100)
  }
}

