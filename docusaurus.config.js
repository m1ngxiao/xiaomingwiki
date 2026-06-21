// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xiaoming Wiki',
  tagline: '记录学习，构建个人知识系统',
  favicon: 'img/logo.svg',

  url: 'https://xiaomingwiki.cn',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'm1ngxiao',
  projectName: 'xiaomingwiki',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    localeConfigs: {
      'zh-CN': {
        label: '中文',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  markdown: {
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mdx1Compat: {
      comments: false,
      admonitions: true,
      headingIds: true,
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/m1ngxiao/xiaomingwiki/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: '学习日志',
          blogDescription: '记录学习进度、论文阅读、项目复现和阶段复盘。',
          blogSidebarTitle: '学习日志',
          blogSidebarCount: 'ALL',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Xiaoming Wiki`,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#111827',
          },
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
        ],
      },
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.svg',
      metadata: [
        {
          name: 'keywords',
          content:
            'Xiaoming Wiki, 技术博客, 个人 Wiki, 数学基础, AI 系统, 大模型推理, Docusaurus',
        },
        {
          name: 'description',
          content: '记录学习，构建个人知识系统。',
        },
      ],
      navbar: {
        title: 'Xiaoming Wiki',
        logo: {
          alt: 'Xiaoming Wiki Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs', label: '文档', position: 'left'},
          {to: '/blog', label: '日志', position: 'left'},
          {to: '/roadmap', label: '路线图', position: 'left'},
          {to: '/search', label: '搜索', position: 'left'},
          {
            href: 'https://github.com/m1ngxiao/xiaomingwiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {label: '文档首页', to: '/docs'},
              {label: '数学基础', to: '/docs/math'},
              {label: 'AI 基础与模型', to: '/docs/ai-models'},
              {label: 'AI 系统与性能', to: '/docs/ai-systems'},
            ],
          },
          {
            title: '学习日志',
            items: [
              {label: '日志首页', to: '/blog'},
              {label: '搜索', to: '/search'},
            ],
          },
          {
            title: '站点',
            items: [
              {label: '关于', to: '/about'},
              {label: '路线图', to: '/roadmap'},
              {
                label: 'GitHub',
                href: 'https://github.com/m1ngxiao/xiaomingwiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xiaoming Wiki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'python',
          'cpp',
          'bash',
          'json',
          'markdown',
          'yaml',
          'cmake',
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

export default config;
