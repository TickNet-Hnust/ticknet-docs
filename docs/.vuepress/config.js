module.exports = {
  title: 'TickNet应用开发文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/peterroe/ticknet-docs',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在Github上编辑此页面',
    nav: [
      // { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '第二课堂',
        items: [
          { text: '第二课堂小程序', link: '/dekt-mobile/' },
          { text: '第二课堂管理端', link: '/dekt-admin/' }
        ]
      },
      {
        text: '校园闲置',
        items: [
          { text: '校园闲置移动端', link: '/xyxz-mobile/' },
          { text: '校园闲置管理端', link: '/xyxz-admin/' }
        ]
      },
      {
        text: '失物招领',
        items: [
          { text: '失物招领移动端', link: '/swzl-mobile/' },
          { text: '失物招领管理端', link: '/swzl-admin/' }
        ]
      },
      {
        text: '面对面项目',
        items: [
          { text: '面对面项目移动端', link: '/mdm-mobile/' }
        ]
      },
    ],
    sidebar: {
      '/dekt-admin/': [
        '',
        'install',
        'dev',
        'dir',
        'request',
        'views',
      ],
      '/dekt-mobile/': [
        '',
        'install',
        'dev',
        'news',
        'dir',
        'deploy'
      ],
      '/swzl-admin/': [
        '',
        'install',
        'dir',
        'deploy'
      ],
      '/swzl-mobile/': [
        '',
        'install'
      ],
      '/xyxz-admin/': [
        '',
        'install',
        'deploy'
      ],
      '/xyxz-mobile/': [
        '',
      ],
      '/': [
        '', /* / */
        // 'about', /* /about.html */
      ],
    }
  }
}