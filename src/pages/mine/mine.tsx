import React, {Component} from 'react';
import { View, Text, Button, Input } from '@tarojs/components'
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

export default class Mine extends React.Component<any, {count: number,date:string,rangeVal:string[]}> {
  // eslint-disable-next-line react/sort-comp
  private WPicker: any = null;
  private WPicker2: any = null;
  // rangeVal: string[];
  constructor(props: any) {
    super(props)
    // eslint-disable-next-line react/no-unused-state
    this.state = {count: 1,date:'日期选择器', rangeVal:['2018-12-12', '2020-04-02']}
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

  onRef2 = (ref) => {
    this.WPicker2 = ref;
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

  onShowPicker = (i) => {
    switch (i) {
      case 1:
        this.WPicker.show()
        break;
      case 2:
        this.WPicker2.show();
        break;
      default:
        break;
    }
  }

  render () {
    return (
      <View className='mine'>
        <Me name='传递过来的name' zoo='传递过来的key'></Me>
        <Text>-----------------------------------</Text>
        <Button onClick={this.onClick.bind(this)}>{this.state.count}</Button>
        <Button onClick={() => {this.onShowPicker(1)}}>{this.state.date}</Button>
        <View style={{background:'red'}}>
          <WPicker
            mode='range'
            startYear='2010'
            endYear='2050'
            value={this.state.rangeVal}
            current={true}
            confirm={this.onConfirm.bind(this, 'date')}
            cancel={this.onCancel}
            onRef={this.onRef}
            themeColor='#3494FF'
          ></WPicker>
        </View>
        <WPicker mode="date"
          startYear="2017"
          endYear="2029"
          value="2020-04-08 16:45:45"
          current={false}
          fields="day"
          confirm={this.onConfirm}
          cancel={this.onCancel}
          disabledAfter={false}
          onRef={this.onRef2}
        ></WPicker>
        <View onClick={() => { this.onShowPicker(2) }}>打开datePicker</View>
        <View className='inputBox'>
          <Input className='input'></Input>
          <View className='box'></View>
          <View className='box'></View>
          <View className='box'></View>
          <View className='box'></View>
        </View>
      </View>
    )
  }
}


