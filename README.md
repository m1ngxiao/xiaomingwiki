# Xiaoming Wiki

Xiaoming Wiki 是一个个人技术博客 / 个人 Wiki，用来长期记录学习过程、技术笔记、课程笔记、工程实践和阶段性复盘。

站点定位：记录学习，构建个人知识系统。

生产域名计划使用：`https://xiaomingwiki.cn`

## 技术栈

- Docusaurus 3
- React
- MDX
- Pagefind
- KaTeX
- Giscus
- Cloudflare Pages

## 本地开发

```bash
npm install
npm start
```

## 本地构建

```bash
npm run build
npm run serve
```

## Pagefind 搜索预览

```bash
npm run build
npm run search:preview
```

构建完成后，Pagefind 索引会生成到 `build/pagefind`。本地 `npm start` 时搜索索引可能不存在，搜索页会自动容错。

## Cloudflare Pages 部署方式

推荐使用 Cloudflare Pages Git Integration 作为主部署方式。

Cloudflare Pages 配置：

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `build`
- Custom domain: `xiaomingwiki.cn`

`.github/workflows/pages-deploy.yml` 是备选部署方式。如果使用 Cloudflare Pages Git Integration，可以不启用这个 workflow。

## Giscus 配置说明

评论组件位于 `src/components/GiscusComments.jsx`。上线前需要：

- 创建公开 GitHub 评论仓库
- 开启 Discussions
- 安装 Giscus app
- 获取 repo id 和 category id
- 替换 `GiscusComments.jsx` 中的占位符

需要替换的占位符：

- `<YOUR_COMMENTS_REPO>`
- `<YOUR_REPO_ID>`
- `<YOUR_CATEGORY_ID>`

## 后续 TODO

- 替换 Giscus 配置
- 添加正式 logo
- 添加 PWA PNG 图标：`static/img/pwa-192.png` 和 `static/img/pwa-512.png`
- 添加更多知识笔记
- 配置 Cloudflare 自定义域和 HTTPS
- 配置 www / pages.dev 重定向
