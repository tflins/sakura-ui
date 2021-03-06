module.exports = {
  lang: "zh-CN",
  title: 'Sakura UI',
  description: '优雅的 vue3 composition api 组件库',
  base: '/sakura-ui/',
  themeConfig: {
    docsBranch: 'main',
    editLinks: false,
    editLinkText: '为此页提供修改建议',
    repo: 'tflins/sakura-ui',
    logo: '/logo.png',
    displayAllHeaders: false,
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/component/install' }
    ],
    sidebar: {
      '/component': [{
        "text": "开发指南",
        "children": [
          {
            "text": "安装",
            "link": "/component/install"
          },
          {
            "text": "风格指南"
          },
          {
            "text": "快速上手"
          }
        ]
      }, {
        "text": "组件",
        "children": [
          {
            "text": "Icon 图标",
            "link": "/component/icon"
          },
          {
            "text": "Button 按钮",
            "link": "/component/button"
          },
          {
            "text": "Avatar 头像",
            "link": "/component/avatar"
          },
          {
            "text": "Message 消息",
            "link": "/component/message"
          },
          {
            "text": "Input 输入框",
            "link": "/component/input"
          }
        ]
      }]
    }
  }
}
