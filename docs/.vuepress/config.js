module.exports = {
  title: 'TickNet应用开发文档',
  themeConfig: {
    nav: [
      // { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '第二课堂小程序',
        link: '/dekt-mobile/'
      },
      {
        text: '第二课堂管理端',
        link: '/dekt-admin/',
      },
      {
        text: '失物招领移动端',
        link: '/swzl-mobile/'
      },
      {
        text: '失物招领管理端',
        link: '/swzl-admin/'
      },
      {
        text: '校园闲置移动端',
        link: '/xyyz-mobile/'
      },
      {
        text: '校园闲置管理端',
        link: '/xyyz-admin/'
      },

    ],
    sidebar: {
      '/dekt-admin/': [
        '',
        'dev',
        'src',
        'api',
        'dir',
        'views'
      ],
      '/dekt-mobile/': [
        '',
      ],
      '/swzl-admin/': [
        '',
      ],
      '/swzl-mobile/': [
        '',
      ],
      '/xyxz-admin/': [
        '',
      ],
      '/xyxz-mobile/': [
        '',
      ],
      '/': [
        '', /* / */
        'about', /* /about.html */
      ],
    }
  }
}