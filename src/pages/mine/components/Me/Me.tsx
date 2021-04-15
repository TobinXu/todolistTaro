import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './Me.scss'

// 组件接受的props 接口
interface IMeProps {
  name?: string;
  zoo: string;
}

// state接口
interface IMeState {
  title: string;
}


// class React.Component<P = {}, S = {}, SS = any>  这个SS是getSnapshotBeforeUpdate的返回值    
// 1：在render之前调用，state已更新
// 2：典型场景：获取render之前的dom状态

export default class Me extends Component<IMeProps, IMeState> {
  // public props: IMeProps = {
  //   name: 'test props name',
  //   key: 'aaaa'
  // }

  public state: IMeState = {
    title: 'home state title test'
  }
  constructor(props:IMeProps, state: IMeState) {
    super(props)
  }

  render () {
    return (
      <View className='Me'>
        <Text>{this.state.title}</Text>
        <Text>-------------!</Text>
        <Text>{this.props.zoo}</Text>
        <Text>-------------!</Text>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

