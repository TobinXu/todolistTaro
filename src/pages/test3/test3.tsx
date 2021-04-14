import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Test3 extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='test3'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
