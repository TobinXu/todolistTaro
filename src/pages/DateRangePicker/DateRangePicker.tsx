import React, { Component } from 'react'
import { View, Text, Button, Picker, CommonEventFunction } from '@tarojs/components'
import './DateRangePicker.scss'

import PickTimer from './components/PickeTimer/PickTimer'

interface IDateRangePickerState {
  showPicker: boolean;
}

interface IDateRangePickerProps {

}


export default class DateRangePicker extends Component<IDateRangePickerProps, IDateRangePickerState> {
  // onDateChange: CommonEventFunction<ChangeEventDetail>

  constructor(props: IDateRangePickerProps) {
    super(props)
    this.state = {
      showPicker: true
    }
  }

  switchShowPicker = () => {
    this.setState({
      showPicker: !this.state.showPicker

    })
    console.log(this.state.showPicker)
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  

  render () {
    return (
      <View className='DateRangePicker'>
        <View className='btn_display'>
          <Text className='btn_cancel'>取消</Text>
          <Text className='btn_correct'>确定</Text>
        </View>
        {/* <View className="btn_display">
          <Text className="btn_cancel">开始时间</Text>
          <Text className="btn_correct">结束时间</Text>
        </View>
        <PickTimer ></PickTimer>
        <PickTimer></PickTimer> */}

        
        <View className='picker_group'>
          <View className='picker_first' >
          <Text className='time1'>开始时间</Text>
          <Button className='btn' onClick={this.switchShowPicker}>请选择</Button>
          <View className={this.state.showPicker ? '' : 'hide'}>
          <PickTimer></PickTimer>
          </View>
          </View>
          <View className='picker_second'>
          <Text className='time2'>结束时间</Text>
          <Button className='btn' onClick={this.switchShowPicker}>请选择</Button>
          <View className={!this.state.showPicker ? '' : 'hide'}>
          <PickTimer></PickTimer>
          </View>
          </View>
        </View>
      </View>
    )
  }
}
