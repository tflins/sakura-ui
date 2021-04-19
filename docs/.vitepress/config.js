module.exports = {
  lang: "zh-CN",
  title: 'Sakura UI',
  description: '优雅的 vue3 composition api 组件库',
  themeConfig: {
    docsBranch: 'main',
    editLinks: false,
    editLinkText: '为此页提供修改建议',
    repo: 'tflins/front-end-notes',
    logo: '/assets/logo.png',
    displayAllHeaders: false,
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/component/button' }
    ],
    sidebar: {
      '/component': [{
        "text": "组件",
        "children": [
          {
            "text": "Button 按钮",
            "link": "/component/button"
          },
          {
            "text": "Avatar 头像",
            "link": "/component/avatar"
          }
        ]
      }]
    }
  }
}
