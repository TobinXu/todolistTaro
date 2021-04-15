import React, { Component } from 'react'
import { View, Text, PickerViewColumn, PickerView } from '@tarojs/components'
import './PickTimer.scss'

// 组件接收的props接口
interface IPickTimerProps {
  
}

// state接口
interface IPickTimerState {
  years: Array<number>;
  year: number;
  months: Array<number>;
  month: number,
  days: Array<number>;
  day: number;
  value: Array<number>;
}

export default class PickeTimer extends Component<IPickTimerProps,IPickTimerState> {

  public state: IPickTimerState;
  constructor (props:IPickTimerProps) {
    super(props)
    const date = new Date()
    const years:Array<number> = []
    const months:Array<number> = []
    const days:Array<number> = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    }
  }

  onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  render() {
    return (
      <View>
        <View>{this.state.year}年{this.state.month}月{this.state.day}日</View>
        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map(item => {
              return (
                <View>{item}年</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.months.map(item => {
              return (
                <View>{item}月</View>
              )
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.days.map(item => {
              return (
                <View>{item}日</View>
              )
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
    )
  }
}
