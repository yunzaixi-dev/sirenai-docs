export default {
  title: 'SirenAI Docs',
  description: 'Documentation for SirenAI',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'SirenAI 的项目文档'
    }
  },

  themeConfig: {
    logo: '/images/logo-v8.png',
    siteTitle: 'docs.sirenai.org',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Technical Architecture', link: '/en/technical-architecture' },
      { text: 'Development Plan', link: '/en/development-plan' },
      { text: 'API', link: '/en/api/auth' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/en/' },
            { text: 'Technical Architecture', link: '/en/technical-architecture' },
            { text: 'Development Plan', link: '/en/development-plan' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Authentication', link: '/en/api/auth' }
          ]
        }
      ],
      '/zh/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/zh/' },
            { text: '技术架构', link: '/zh/technical-architecture' },
            { text: '开发计划', link: '/zh/development-plan' }
          ]
        },
        {
          text: 'API 参考',
          items: [
            { text: '认证接口', link: '/zh/api/auth' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunzaixi-dev/sirenai-docs' }
    ],

    // 确保显示侧边栏
    aside: true,
    outline: 'deep',
    
    // 本地化
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  },
  
  cleanUrls: true,
  ignoreDeadLinks: true
}
