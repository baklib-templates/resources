import { Controller } from "@hotwired/stimulus"
import Mustache from "mustache"

// 面包屑生成
export default class extends Controller {
  static values = {
    channel: String, // 当前选中的 channel path（从 params.channel 传入）
    // 传入默认值 []
    defaultBreadcrumb: Array
  }

  static targets = [
    "navTreeContainer", // nav_tree 的整体容器
    "breadcrumbContainer", // static_breadcrumb 的容器
    "breadcrumbTemplate", // 面包屑模板
    "navNode" // nav_tree 中的每个节点
  ]

  connect() {
    if (this.hasDefaultBreadcrumbValue && this.defaultBreadcrumbValue) {
      this.renderBreadcrumb(this.defaultBreadcrumbValue.slice(1, this.defaultBreadcrumbValue.length))
    }
  }

  // 当 navNode 连接时
  navNodeTargetConnected(element) {
    // 监听 navNode 点击事件
    element.addEventListener('click', (_e) => {
      this.updateBreadcrumb(element, element.getAttribute('data-node-path'))
    })
    // 检查是否是当前激活的节点
    this.updateBreadcrumb(element, this.channelValue)
  }

  updateBreadcrumb(element, path) {
    if (element?.getAttribute('data-node-path') === path) {
      const data = this.getBreadcrumbData(element, path)
      this.renderBreadcrumb(data)
    }
  }

  // 递归获取当前节点的父节点和祖父节点，返回数组 [..., 父级, 最终节点]
  getBreadcrumbData(element, basePath, data = []) {
    const liDom = element.closest("li");
    const basePathParts = basePath.split('/').filter(Boolean)
    const pathParts = element.getAttribute('data-node-path').split('/').filter(Boolean)
    if (pathParts.length > basePathParts.length) {
      return data
    }
    if (pathParts.every((part, idx) => basePathParts[idx] === part)) {
      data.unshift({
        path: element.getAttribute('data-node-path'),
        link_text: element.getAttribute('data-node-name'),
      })

      const parentNode = liDom.parentNode.closest("li")?.querySelector("[turbo-nav-tree-item] > [data-breadcrumb-target='navNode']")
      if (parentNode) {
        this.getBreadcrumbData(parentNode, basePath, data)
      }
    }
    return data
  }

  // 渲染面包屑
  renderBreadcrumb(data) {
    if (!this.hasBreadcrumbTemplateTarget) {
      console.warn('breadcrumb_controller: breadcrumbTemplate target not found')
      return
    }

    const template = this.breadcrumbTemplateTarget.innerHTML.trim()
    if (!template) {
      console.warn('breadcrumb_controller: breadcrumbTemplate is empty')
      return
    }

    this.breadcrumbContainerTarget.innerHTML = ''
    for (const item of data) {
      const html = Mustache.render(template, item)
      this.breadcrumbContainerTarget.insertAdjacentHTML('beforeend', html)
    }
  }
}
