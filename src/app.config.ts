export default {
  pages: [
    "pages/home/home",
    'pages/todo/todo',
    "pages/Mine/Mine",
    "pages/Webviewcom/Webviewcom"
  ],
  "tabBar":{
    "list": [
      {
        "pagePath":"pages/home/home",
        "text":"Home",
        "iconPath":"resource/home.png",
        "selectedIconPath": "resource/home_on.png"
      },{
      "pagePath":"pages/todo/todo",
      "text":"todoList",
      "iconPath": "resource/todo_list.png",
      "selectedIconPath": "resource/todo_list_on.png"
    },{
      "pagePath":"pages/Mine/Mine",
      "text":"Me",
      "iconPath": "resource/me.png",
      "selectedIconPath": "resource/me_on.png"
    },{
      "pagePath":"pages/Webviewcom/Webviewcom",
      "text":"Webviewcom",
      "iconPath": "resource/me.png",
      "selectedIconPath": "resource/me_on.png"
    }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
