import { Component } from 'react'
import { View, Text, WebView } from '@tarojs/components'
import './Webviewcom.scss'

export default class Webviewcom extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMessage (e) {
    console.log(e)
  }
  
  render () {
    return (
      // <WebView src='http://10.6.16.180:8080/greeter.html' onMessage={this.handleMessage} />
      <WebView src='https://m.biyao.com' onMessage={this.handleMessage} />

    )
  }
}
