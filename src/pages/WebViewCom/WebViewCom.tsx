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
      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />
    )
  }
}
