export default {
  pages: [
    "pages/home/home",
    'pages/index/index'
  ],
  "tabBar":{
    "list": [
      {
        "pagePath":"pages/home/home",
        "text":"Home",
        "iconPath":"resource/home.png",
        "selectedIconPath": "resource/home_on.png"
      },{
      "pagePath":"pages/index/index",
      "text":"todoList",
      "iconPath": "resource/todo_list.png",
      "selectedIconPath": "resource/todo_list_on.png"
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
