import { Component, FunctionComponent, useState } from 'react'
import { View, Text, Input, Button, EventProps, Checkbox, Label, CheckboxGroup, Swiper, SwiperItem, Image } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'

import './home.scss'
import { CheckboxGroupProps } from '@tarojs/components/types/CheckboxGroup'
import Taro, { render, usePullDownRefresh } from '@tarojs/taro'
import PickeTimer from '../DateRangePicker/components/PickeTimer/PickTimer'
import DateRangePicker from '../DateRangePicker/DateRangePicker'




const home: FunctionComponent = () => {
  const [newTodoText, setNewTodoText] = useState('')
  const [todoList, setTodoList] = useState<{
    text: string,
    isComplete: boolean
  }[]>([])

  const handleInput: InputProps['onInput'] = e => {
    setNewTodoText(e.detail.value)
  }

  const handleCLick: EventProps['onClick'] = () => {
    setTodoList(prevList => {
      return [...prevList, {
        text: newTodoText,
        isComplete: false
      }]
    })
    setNewTodoText('')
  }

  const handleCheck: CheckboxGroupProps["onChange"] = (e) => {
    setTodoList(prevList => {
      return prevList.map(item => {
        return {
          text: item.text,
          isComplete: e.detail.value.indexOf(item.text) > -1
        }
      })
    })
  }

  const onInputEvent = ():void => {
    console.log('跳转到搜索页面')
  }
  
//   Taro.startPullDownRefresh()
// 对应class组件中的onPullDownRefresh()生命周期函数
usePullDownRefresh(() => {
    console.log("下拉刷新")
    let time = setTimeout(() => {
        console.log("过了500ms")
        Taro.stopPullDownRefresh()
        clearTimeout(time)
    }, 300)
    
})

    return (
      <View className="bg">
        <View className="searchbox">
          <Image className='search-icon' src='https://static.biyao.com/miniapp/search/icon-search.png'></Image>
          <Input className="inputbox" placeholder="请输入要搜索的商品" ></Input>
        </View>
        <Swiper
          className="page-section"
          indicatorDots={true}
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          autoplay={true}
          interval={2000}
        >
            <SwiperItem className="swiper">
              <Image className="img" mode="widthFix" src="https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg" />
            </SwiperItem>
            <SwiperItem className="swiper">
            <Image className="img" mode="widthFix" src="https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg" />
            </SwiperItem>
            <SwiperItem className="swiper">
            <Image className="img" mode="widthFix" src="https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg" />
            </SwiperItem>
        </Swiper>
        
        <Button onClick={handleCLick} className="btn">add todo</Button>
        <DateRangePicker></DateRangePicker>
      </View>
    )  
}


export default home