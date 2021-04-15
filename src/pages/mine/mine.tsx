import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Me from './components/Me/Me'
import './Mine.scss'

// 尖括号表示泛型，可以用来约束内容
// var test = function(nums: Array<number>) {
//   console.log(nums);
// };
// test([1,2])
// test('xxx')
// test(true)
const {Picker} = require('taro_picker')

export default class Mine extends Component<any, {count: number}> {
  count: number;
  state = {count: 1,number:2};
  constructor(props: any) {
    super(props)
  }

  componentDidCatch() {

  }

  componentDidUpdate() {

  }
  
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  }

  render () {
    return (
      <View className='mine'>
        <Me name="传递过来的name" zoo="传递过来的key"></Me>
        <Text>-----------------------------------</Text>
        <Button onClick={this.onClick.bind(this)}>{this.state.count}</Button>
        {/* <Picker></Picker> */}
      </View>
    )
  }
}


