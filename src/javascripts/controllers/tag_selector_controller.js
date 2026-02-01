import { Controller } from '@hotwired/stimulus';
import Mustache from 'mustache';
import { buildUrl } from "../utils/index"

/**
 * Tag Selector Controller
 * 主要功能：
 * - 打开/关闭 modal
 * - 搜索标签数据
 * - 选择/更新标签数据
 */
export default class extends Controller {
  static targets = ['searchInput', 'resultsContainer', 'resultsList', 'selectedTagsContainer', 'selectedTagsList', 'modal', 'clearSearchBtn', 'selectedCount', 'searchBtn', 'tagItemTemplate', 'selectedTagItemTemplate', 'loadingTemplate', 'emptyTemplate', 'loadMoreTemplate', 'errorTemplate', 'emptySelectedTagsTemplate'];
  static values = {
    url: { type: String }
  };

  connect() {
    this.availableTags = [];
    this.hasMore = true;
    this.scrollTimeout = null;
    this.isScrolling = false;
    this.isInitialized = false; // 标记是否已经初始化加载过数据
    this.isComposing = false; // 标记是否正在使用输入法组合输入（中文输入法等）
    // 临时选择的标签（未确认）
    this.tempSelectedTags = new Set();
    // 已确认的标签（从 Alpine.js 读取）
    this.confirmedTags = new Set(this.getConfirmedTagsFromAlpine());

  }

  /**
   * 处理输入法组合开始事件（中文输入法等）
   */
  handleCompositionStart() {
    this.isComposing = true;
  }

  /**
   * 处理输入法组合结束事件
   */
  handleCompositionEnd() {
    this.isComposing = false;
  }

  disconnect() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  /**
   * 打开模态框
   */
  openModal() {
    if (this.hasModalTarget) {
      this.modalTarget.showModal();
      // 直接调用处理函数，因为 DaisyUI dialog 可能不会触发 'show' 事件
      this.handleModalOpen();
    }
  }

  /**
   * 关闭模态框
   */
  closeModal() {
    if (this.hasModalTarget) {
      this.modalTarget.close();
      // 直接调用处理函数
      this.handleModalClose();
    }
  }

  /**
   * 模态框打开时的处理
   */
  handleModalOpen() {
    // 重新从 Alpine.js 读取最新的已确认标签（同步外部手动移除的标签）
    this.confirmedTags = new Set(this.getConfirmedTagsFromAlpine());

    // 重置临时选择为已确认的标签
    this.tempSelectedTags = new Set(this.confirmedTags);

    // 如果还没有初始化加载过数据，或者标签列表为空，加载第一页
    if (!this.isInitialized || this.availableTags.length === 0) {
      // 重置分页状态
      this.currentPage = 1;
      this.hasMore = true;
      this.availableTags = [];
      this.searchKeyword = '';
      // 清空搜索输入框
      if (this.hasSearchInputTarget) {
        this.searchInputTarget.value = '';
      }
      this.isInitialized = true;
      this.loadTags(true);
    } else {
      // 重新渲染，以反映当前的选择状态
      this.renderTags();
    }

    // 更新已选标签显示
    this.updateSelectedTagsDisplay();
    this.updateClearButtonVisibility();
  }

  /**
   * 模态框关闭时的处理
   */
  handleModalClose() {
    // 关闭时不更新，只有点击确定时才更新
    // 重置搜索关键词（可选）
    // this.clearSearch();
  }

  /**
   * 清除搜索
   */
  clearSearch() {
    if (this.hasSearchInputTarget) {
      this.searchInputTarget.value = '';
      this.currentPage = 1;
      this.searchKeyword = '';
      this.availableTags = [];
      this.hasMore = true;
      this.updateClearButtonVisibility();
      this.isLoading = false;
      this.loadTags(true);
    }
  }

  /**
   * 输入时更新清除按钮显示状态（不自动搜索）
   */
  search(event) {
    // 只更新清除按钮的显示状态，不执行搜索
    this.updateClearButtonVisibility();
  }

  /**
   * 执行搜索（点击搜索按钮或回车）
   */
  performSearch(event) {
    // 如果正在使用输入法组合输入（如中文输入法），忽略回车键
    if (this.isComposing) {
      return;
    }

    // 如果是键盘事件且是回车键，阻止默认行为
    if (event && event.type === 'keydown' && event.key === 'Enter') {
      event.preventDefault();
    }

    const keyword = this.hasSearchInputTarget ? this.searchInputTarget.value.trim() : '';
    this.currentPage = 1;
    this.searchKeyword = keyword;
    this.availableTags = [];
    this.hasMore = true;
    this.updateClearButtonVisibility();
    // 重置加载状态并加载数据
    this.isLoading = false;
    this.loadTags(true);
  }

  /**
   * 点击搜索按钮
   */
  searchButtonClick() {
    this.performSearch();
  }

  /**
   * 更新清除按钮的显示状态
   */
  updateClearButtonVisibility() {
    if (this.hasClearSearchBtnTarget) {
      const keyword = this.hasSearchInputTarget ? this.searchInputTarget.value.trim() : '';
      if (keyword) {
        this.clearSearchBtnTarget.classList.remove('hidden');
      } else {
        this.clearSearchBtnTarget.classList.add('hidden');
      }
    }
  }

  /**
   * 加载标签列表
   */
  async loadTags(initLoad = false) {
    // 如果是初始化加载，允许加载；否则检查是否正在加载或没有更多数据
    if (!initLoad && (this.isLoading || !this.hasMore)) {
      return;
    }

    this.isLoading = true;
    this.renderLoading();

    try {
      let params = { page: this.currentPage };

      if (this.searchKeyword) {
        params['keywords'] = this.searchKeyword
      }

      const url = buildUrl(this.urlValue, params, true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 确保 data.data 是数组，处理空结果的情况
      const newTags = Array.isArray(data.data) ? data.data : [];

      // 如果是初始化加载或搜索，重置数组；否则追加
      if (initLoad || this.currentPage === 1) {
        this.availableTags = newTags;
      } else {
        // 追加新的标签
        this.availableTags = [...this.availableTags, ...newTags];
      }

      // 更新分页信息
      this.currentPage++;
      this.totalPages = data.paginate?.total_pages || 0;
      this.hasMore = this.currentPage <= this.totalPages;

      // 数据加载完成，先设置加载状态为 false，再渲染
      // 这样 renderTags() 就能正确判断是否显示空状态
      this.isLoading = false;

      // 渲染标签列表（即使结果为空也会正确显示空状态）
      this.renderTags();
    } catch (error) {
      console.error('加载标签失败:', error);
      // 如果出错且没有标签，显示错误状态
      if (this.availableTags.length === 0) {
        this.renderError();
      }
    } finally {
      // 确保加载状态被重置
      this.isLoading = false;
    }
  }

  /**
   * 处理容器滚动事件（无限滚动）
   */
  handleScroll(event) {
    const container = event.target;
    const { scrollTop, scrollHeight, clientHeight } = container;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      const threshold = 50;
      if (
        scrollTop + clientHeight >= scrollHeight - threshold &&
        !this.isLoading &&
        this.hasMore &&
        !this.isScrolling
      ) {
        this.isScrolling = true;
        this.loadTags().then(() => {
          this.isScrolling = false;
        }).catch(() => {
          this.isScrolling = false;
        });
      }
    }, 100);
  }

  /**
   * 切换标签选中状态
   */
  toggleTag(event) {
    const button = event.target.closest('[data-tag-name]');
    if (!button) return;

    const tagName = button.dataset.tagName;

    if (this.tempSelectedTags.has(tagName)) {
      this.tempSelectedTags.delete(tagName);
    } else {
      this.tempSelectedTags.add(tagName);
    }

    // 更新显示
    this.renderTags();
    this.updateSelectedTagsDisplay();
  }

  /**
   * 移除已选标签
   */
  removeTag(event) {
    const button = event.target.closest('[data-remove-tag]');
    if (!button) return;

    const tagName = button.dataset.removeTag;
    this.tempSelectedTags.delete(tagName);

    // 更新显示
    this.renderTags();
    this.updateSelectedTagsDisplay();
  }

  /**
   * 从 Alpine.js 获取已确认的标签列表
   */
  getConfirmedTagsFromAlpine() {
    try {
      let alpineElement = this.element.closest('[x-data]');
      if (!alpineElement) {
        alpineElement = document.querySelector('[x-data*="attachmentsQuery"]');
      }

      if (alpineElement && window.Alpine) {
        const alpineData = window.Alpine.$data(alpineElement);
        if (alpineData && alpineData.attachmentsQuery && alpineData.attachmentsQuery.resource_tags) {
          const tags = alpineData.attachmentsQuery.resource_tags;
          return Array.isArray(tags) ? tags : [tags].filter(Boolean);
        }
      }
    } catch (e) {
      console.warn('无法从 Alpine.js 读取标签:', e);
    }

    return [];
  }

  /**
   * 判断标签是否被选中（临时选择）
   */
  isTagSelected(tagName) {
    return this.tempSelectedTags.has(tagName);
  }

  /**
   * 更新已选标签显示
   */
  updateSelectedTagsDisplay() {
    if (!this.hasSelectedTagsContainerTarget) return;

    const selectedCount = this.tempSelectedTags.size;

    // 更新计数
    if (this.hasSelectedCountTarget) {
      this.selectedCountTarget.textContent = selectedCount;
    }

    // 使用 selectedTagsList target 作为内容容器，样式已在模板中定义
    const container = this.hasSelectedTagsListTarget
      ? this.selectedTagsListTarget
      : this.selectedTagsContainerTarget;

    if (selectedCount === 0) {
      // 使用空状态模板
      if (this.hasEmptySelectedTagsTemplateTarget) {
        const template = this.emptySelectedTagsTemplateTarget.innerHTML.trim();
        container.innerHTML = Mustache.render(template, {});
      }
      return;
    }

    // 使用 Mustache 模板渲染
    if (!this.hasSelectedTagItemTemplateTarget) {
      console.warn('tag-selector: selectedTagItemTemplate target not found');
      return;
    }

    const template = this.selectedTagItemTemplateTarget.innerHTML.trim();

    const html = Array.from(this.tempSelectedTags)
      .map((tagName) => {
        return Mustache.render(template, {
          name: tagName,
        });
      })
      .join('');

    // 直接设置内容，容器样式已在模板中定义
    container.innerHTML = html;
  }

  /**
   * 渲染标签列表
   */
  renderTags() {
    if (!this.hasResultsContainerTarget) return;

    // 使用 resultsList target 作为内容容器，样式已在模板中定义
    const container = this.hasResultsListTarget
      ? this.resultsListTarget
      : this.resultsContainerTarget;

    // 使用 Mustache 模板渲染
    if (!this.hasTagItemTemplateTarget) {
      console.warn('tag-selector: tagItemTemplate target not found');
      return;
    }

    const template = this.tagItemTemplateTarget.innerHTML.trim();

    const html = this.availableTags
      .map((tag) => {
        const isSelected = this.isTagSelected(tag.name);
        return Mustache.render(template, {
          name: tag.name,
          isSelected: isSelected,
        });
      })
      .join('');

    // 如果没有标签，根据加载状态显示不同内容
    if (this.availableTags.length === 0) {
      // 如果正在加载，显示加载状态
      if (this.isLoading) {
        if (this.hasLoadingTemplateTarget) {
          const template = this.loadingTemplateTarget.innerHTML.trim();
          container.innerHTML = Mustache.render(template, {
            message: '加载中...',
          });
        }
        return;
      }

      // 如果不在加载，显示空状态
      if (this.hasEmptyTemplateTarget) {
        const template = this.emptyTemplateTarget.innerHTML.trim();
        const emptyMessage = this.searchKeyword
          ? '未找到匹配的标签'
          : '暂无标签';
        const emptyIcon = this.searchKeyword
          ? 'ri-search-line'
          : 'ri-inbox-line';

        container.innerHTML = Mustache.render(template, {
          icon: emptyIcon,
          message: emptyMessage,
          hasHint: !!this.searchKeyword,
          hint: '请尝试其他关键词',
        });
      }
      return;
    }

    // 添加加载指示器（加载更多时）
    let loadingIndicator = '';
    if (this.isLoading && this.availableTags.length > 0) {
      if (this.hasLoadMoreTemplateTarget) {
        const template = this.loadMoreTemplateTarget.innerHTML.trim();
        loadingIndicator = Mustache.render(template, {
          message: '加载更多...',
        });
      }
    }

    // 直接设置内容，容器样式已在模板中定义
    container.innerHTML = html + loadingIndicator;
  }

  /**
   * 渲染加载状态
   */
  renderLoading() {
    if (!this.hasResultsContainerTarget) return;

    if (this.availableTags.length === 0 && this.hasLoadingTemplateTarget) {
      const template = this.loadingTemplateTarget.innerHTML.trim();
      const container = this.hasResultsListTarget
        ? this.resultsListTarget
        : this.resultsContainerTarget;
      container.innerHTML = Mustache.render(template, {
        message: '加载中...',
      });
    }
  }

  /**
   * 渲染错误状态
   */
  renderError() {
    if (!this.hasResultsContainerTarget) return;

    if (this.hasErrorTemplateTarget) {
      const template = this.errorTemplateTarget.innerHTML.trim();
      const container = this.hasResultsListTarget
        ? this.resultsListTarget
        : this.resultsContainerTarget;
      container.innerHTML = Mustache.render(template, {
        icon: 'ri-error-warning-line',
        message: '加载标签失败，请重试',
      });
    }
  }

  /**
   * 确认选择并更新父组件
   */
  confirmSelection() {
    // 更新已确认的标签
    this.confirmedTags = new Set(this.tempSelectedTags);

    // 更新父组件（Alpine.js）
    this.updateParentComponent();
    this.closeModal();
  }

  /**
   * 更新父组件（Alpine.js）
   */
  updateParentComponent() {
    // 触发自定义事件，通知父组件更新
    // 使用 prefix: false 确保事件名称是 tags-changed，而不是 tag-selector:tags-changed
    this.dispatch('tags-changed', {
      detail: {
        tags: Array.from(this.tempSelectedTags),
      },
      prefix: false, // 禁用 Stimulus 的默认前缀
    });
  }

  /**
   * 转义 HTML 特殊字符
   */
  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}
