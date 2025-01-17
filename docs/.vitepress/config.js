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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Technical Architecture', link: '/en/technical-architecture' }
    ],

    sidebar: {
      '/en/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/en/' },
            { text: 'Technical Architecture', link: '/en/technical-architecture' }
          ]
        }
      ],
      '/zh/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/zh/' },
            { text: '技术架构', link: '/zh/technical-architecture' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunzaixi-dev/sirenai-docs' }
    ]
  },
  
  cleanUrls: true,
  ignoreDeadLinks: true
}
