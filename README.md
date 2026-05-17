# 资源门户 (Picture Portal)

专业的资源管理门户模板，专为数字资产和媒体资源管理而设计。支持多级栏目分类导航、标签分类、多条件查询筛选等功能，提供卡片和列表两种展示模式，具备完善的权限管理体系和资源安全保护。

## ✨ 主要特性

- 🗂️ **多级栏目分类导航** - 支持无限层级的栏目分类结构
- 🏷️ **标签分类管理** - 支持多标签筛选和标签页面展示
- 🔍 **多条件查询筛选** - 关键词搜索、标签筛选、文件类型筛选、文件大小范围筛选
- 📱 **双视图展示模式** - 卡片视图和列表视图一键切换
- 👁️ **资源预览功能** - PC 端侧边栏预览，移动端全屏 Modal 预览
- 🔐 **权限管理体系** - 页面访问权限、密码保护、用户登录验证
- 🛡️ **资源安全保护** - 防盗链保护、下载链接有效期设置
- 📦 **批量操作功能** - 支持批量下载和批量选择
- 🔄 **排序功能** - 按创建时间、修改时间排序，支持升序/降序
- 🔍 **图片缩放功能** - 网格视图下支持 50%-200% 缩放
- 📱 **响应式设计** - 完美适配桌面端和移动端设备
- 📄 **多文件类型支持** - 图片、视频、音频、PDF、PPT、Word、Excel、压缩包等

## 🛠️ 技术栈

- **前端框架**: Stimulus JS、Alpine.js、Turbo JS
- **样式框架**: Tailwind CSS 4、DaisyUI
- **模板引擎**: Liquid
- **图标库**: RemixIcon
- **构建工具**: esbuild、Tailwind CSS CLI

## 📁 项目结构

```
picture_portal/
├── assets/              # 编译后的静态资源
│   ├── fonts/           # 字体文件
│   ├── images/          # 图片资源
│   ├── javascripts/     # JavaScript 文件
│   └── stylesheets/     # CSS 文件
├── config/              # 配置文件
│   └── settings_schema.json  # 主题配置架构
├── docs/                # 文档目录
│   ├── theme_usage_guide.md   # 使用说明文档
│   └── theme_usage_guide.json # 结构化数据
├── layout/              # 布局模板
│   ├── theme.liquid     # 主布局
│   └── theme_no_content.liquid  # 无内容布局
├── locales/             # 国际化文件
│   ├── zh-CN.json      # 中文翻译
│   └── en.json         # 英文翻译
├── snippets/            # 代码片段
│   ├── attachment/      # 附件相关片段
│   └── attachments/    # 附件列表相关片段
├── src/                 # 源代码目录
│   ├── javascripts/    # JavaScript 源码
│   └── stylesheets/    # CSS 源码
├── statics/             # 静态页面模板
├── templates/           # 页面模板
│   ├── index.liquid    # 首页
│   ├── channel.liquid  # 栏目页
│   ├── page.liquid     # 资源页
├── package.json         # 项目配置
├── tailwind.config.js   # Tailwind 配置
└── README.md           # 项目说明
```

## ⚙️ 配置说明

### 全局配置

在 `config/settings_schema.json` 中可以配置：

- **品牌设置**: Logo 图片
- **导航菜单设置**: 自定义导航菜单和头部 HTML 代码
- **资源设置**: 资源下载链接有效期（默认 7200 秒）

### 推荐配色方案

模板提供了三种预设配色方案：

- **奢华 (Luxury)**: 暗金色主题
- **现代 (Modern)**: 深蓝灰主题
- **优雅 (Elegant)**: 棕色主题

### 首页配置

在站点后台编辑**首页**（`index` 模板）时，可在页面设置中配置以下项（定义见 `templates/index.liquid` 的 `{% schema %}`）：

| 设置项 | 类型 | 说明 |
|--------|------|------|
| **在详情页面打开资源** | 复选框 | 未勾选（默认）：在首页内通过侧边栏（PC）或全屏弹层（移动端）预览资源；勾选后点击资源将跳转至独立详情页 |
| **首页显示栏目导航卡片** | 复选框 | 未勾选（默认）：不展示栏目卡片；勾选后在首页顶部展示一级栏目卡片（封面、标题、描述、子资源数量），支持横向滑动浏览 |
| **Hero 区域 HTML** | HTML | 首页主内容区顶部的自定义 Hero 区块，支持 HTML 与有限的 Tailwind CSS / DaisyUI 样式；留空则不显示 |

**显示范围**：Hero 与栏目导航卡片仅在访问首页根路径（无 `?channel=` 参数）时显示；进入具体栏目筛选后自动隐藏，避免与资源列表区域重复。

**Hero 预设参考**（可复制到「Hero 区域 HTML」，或修改 `presets/` 后填入 `preset:文件名` 作为默认值）：

- `presets/hero.html` — 简洁文案卡片（默认）
- `presets/hero2.html` — 全屏背景图 Hero
- `presets/hero3.html` — 多屏轮播 Hero

**栏目卡片封面**：在各级**栏目页**（`channel` 模板）设置中上传「封面图片」（`thumb_url`），并填写栏目名称与描述，即可在栏目导航卡片中展示。

## 📚 文档

- [使用说明文档](./docs/theme_usage_guide.md) - 详细的模板使用指南
- [结构化数据](./docs/theme_usage_guide.json) - JSON 格式的模板信息

## 🔗 相关链接

- **Baklib 开发文档**: https://dev.baklib.cn/
- **Baklib 官网**: https://www.baklib.com/
- **DaisyUI 文档**: https://daisyui.com/docs
- **Tailwind CSS 文档**: https://tailwindcss.com/docs

## 📄 许可证

本项目为 Baklib 主题模板，版权归 Baklib 所有。


