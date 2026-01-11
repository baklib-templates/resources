import { Controller } from "@hotwired/stimulus"

// 批量下载控制器
export default class extends Controller {
  connect() {
    this.selectedItems = new Set()
  }

  download(event) {
    event.preventDefault()

    const checkboxes = document.querySelectorAll('.batch-checkbox:checked')
    const items = Array.from(checkboxes).map(cb => ({
      id: cb.value,
      url: cb.closest('tr, .bg-white, .dark\\:bg-gray-800')?.querySelector('a[href]')?.href || '',
      name: cb.closest('tr, .bg-white, .dark\\:bg-gray-800')?.querySelector('h3, td a')?.textContent || ''
    }))

    if (items.length === 0) {
      alert('请先选择要下载的资源')
      return
    }

    // 批量下载逻辑
    // 方案1: 逐个下载
    items.forEach((item, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = item.url
        link.download = item.name
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 200) // 延迟下载，避免浏览器阻止
    })

    // 方案2: 如果后端支持，可以发送批量下载请求
    // fetch('/-/batch-download', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.content
    //   },
    //   body: JSON.stringify({ ids: items.map(i => i.id) })
    // })
  }
}

