# IO Club 组织主页

基于 [AstroWind](https://github.com/onwidget/astrowind) 的中文组织介绍与静态博客，使用 Astro、Tailwind CSS 和 Markdown / MDX。

- 远程仓库：<https://github.com/io-club/io-club.github.io>
- 部署目标：<https://io-club.github.io/>
- 上游主题提交：`14e1a691f80548dcc36370847b1a02c0d0b12821`
- 保留上游 MIT 许可，见 `LICENSE.md`。

## 本地开发

需要 Node.js 24 LTS（最低 22.22.3）和 npm。

```powershell
cd D:\26ioclub\io-club.github.io
npm ci
npm run dev
```

打开终端打印的地址，通常为 <http://localhost:4321/>。

```powershell
npm run check:astro # Astro / TypeScript 检查
npm run check       # 类型、ESLint 与格式检查
npm run build       # 构建静态文件到 dist/
npm run preview     # 预览构建结果
```

## 内容与样式入口

| 内容                            | 文件                                               |
| ------------------------------- | -------------------------------------------------- |
| 名称、域名、SEO、语言、博客设置 | `src/config.yaml`                                  |
| 首页                            | `src/pages/index.astro`                            |
| 组织介绍                        | `src/pages/about.astro`                            |
| 导航与页脚                      | `src/navigation.ts`                                |
| 文章                            | `src/data/post/*.md` 或 `*.mdx`                    |
| 配色与中文字体                  | `src/components/CustomStyles.astro`                |
| 社团信息、方向与支持            | `src/data/club.ts`                                 |
| 社团视觉样式                    | `src/assets/styles/club.css`                       |
| 招新模块与群号复制              | `src/components/ClubJoin.astro`                    |
| 吉祥物、浏览器图标              | `public/images/mascot.png`                         |
| 招新传单原图                    | `src/assets/images/club-poster.jpg`                |
| 分享图                          | `public/social-card.svg`、`public/social-card.png` |
| GitHub Pages 工作流             | `.github/workflows/deploy.yml`                     |

社团名称、五大技术方向、项目支持与 QQ 群号来自用户提供的招新传单。吉祥物使用用户提供的原始 PNG，未重绘。页面文案可继续调整；具体活动时间、成员资料和项目案例暂未提供，因此没有编造。欢迎文章可以继续编辑，至少保留一篇已发布文章，博客列表才会生成。

字体使用本机中文字体栈，构建和浏览均不依赖在线字体服务。网站为纯静态页面，没有需要后端处理的表单。

## 发布文章

在 `src/data/post/` 新建文件，例如 `first-meetup.md`：

```markdown
---
title: '文章标题'
publishDate: 2026-11-03T00:00:00Z
excerpt: '简短摘要。'
category: '活动记录'
tags: ['分享']
draft: true
---

这里写正文。
```

准备好后将 `draft` 改为 `false`。文件名决定文章路径，例如 `/blog/first-meetup/`。日期请填写真实发布时间；`draft: true` 不生成文章页面，也不会进入 RSS 或文章列表。

## 部署到 GitHub Pages

本站是组织根站点，`site` 为 `https://io-club.github.io`，`base` 保持 `/`，不需要添加仓库名作为路径。

1. 在 GitHub 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
2. 首次提交并推送：

   ```powershell
   git add .
   git commit -m "Initialize IO Club website with AstroWind"
   git push -u origin main
   ```

3. 在 **Actions** 查看部署。成功后访问 <https://io-club.github.io/>。

后续推送到 `main` 会自动构建和部署；Pull Request 只检查与构建，不会发布。

## 主题选择

选择 AstroWind 是因为它同时提供组织展示需要的首页区块、导航、暗色模式和响应式布局，以及文章、分类、标签、RSS 和站点地图。当前版本已清理与本站无关的营销演示页、模板文章、第三方账号及未接入的订阅表单，仍保留主题组件，方便继续扩展。

参考：[Astro 的 GitHub Pages 部署说明](https://docs.astro.build/en/guides/deploy/github/)。

## 依赖审计

初始化时已升级兼容版本依赖，`npm audit --omit=dev` 无已知漏洞。完整审计仍报告开发检查工具链中的 14 个中危告警（ESLint / minimatch、Tailwind Typography / postcss-selector-parser）；未使用会破坏兼容性的 `npm audit fix --force`。这些工具不会包含在生成的静态网站中。

## 社团素材与配色

当前视觉参考社团招新传单：海军蓝 `#122f53`、暖橙 `#c94b1e`、米白 `#fffaf1`，辅以五个技术方向的便签配色。原始素材保留在项目内；首页传单通过 Astro 输出优化后的 WebP，点击招新传单才会打开完整原图。QQ 群号为 `163194527`，可以在 `src/data/club.ts` 统一修改。
