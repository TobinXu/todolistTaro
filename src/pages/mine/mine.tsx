import React, {Component} from 'react';
import { View, Text, Button } from '@tarojs/components'
import Me from './components/Me/Me'
import './Mine.scss'

import WPicker from '../../components/wPicker/index'

// 尖括号表示泛型，可以用来约束内容
// var test = function(nums: Array<number>) {
//   console.log(nums);
// };
// test([1,2])
// test('xxx')
// test(true)
const {Picker} = require('taro_picker')

export default class Mine extends React.Component<any, {count: number,date:string}> {
  WPicker: any = null;
  rangeVal: string[];
  constructor(props: any) {
    super(props)
    this.state = {count: 1,date:'日期选择器'}
  }

  componentDidCatch() {

  }
  
  componentDidMount() {
  }

  componentDidUpdate() {

  }
  
  onClick() {
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  }

  onRef = (ref) => {
    this.WPicker = ref;
  }

  onConfirm = (type, e) => {
    console.log(e)
    // 更新state中的日期date
    this.setState({
      date: e.value
    })
    let k = e.value
    console.log(k)
    console.log(this.state.date)
  }

  onCancel = () => {}

  onShowPicker() {
    this.WPicker.show()
  }

  render () {
    return (
      <View className='mine'>
        <Me name="传递过来的name" zoo="传递过来的key"></Me>
        <Text>-----------------------------------</Text>
        <Button onClick={this.onClick.bind(this)}>{this.state.count}</Button>
        <Button onClick={this.onShowPicker.bind(this)}>{this.state.date}</Button>
        <View style={{background:'red'}}>
        <WPicker
          mode="range"
          startYear="2010"
          endYear="2030"
          value={this.rangeVal}
          current={true}
          confirm={this.onConfirm.bind(this, 'date')}
          cancel={this.onCancel}
          onRef={this.onRef}
          themeColor={'#3494FF'}
        ></WPicker>
        </View>
      </View>
    )
  }
}


