import { Component, useState } from 'react'
import { View, Text, Input, Button, EventProps, Checkbox, Label, CheckboxGroup } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'

import './home.scss'
import { CheckboxGroupProps } from '@tarojs/components/types/CheckboxGroup'
import Taro, { usePullDownRefresh } from '@tarojs/taro'




export default () => {
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

  
//   Taro.startPullDownRefresh()
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
      <View>
      <CheckboxGroup onChange={handleCheck}>
        {todoList.map(item => {
          return (
            <View key={item.text}>
              <Label className={item.isComplete ? 'complete' : ''}>
              <Checkbox value={item.text} />
              <Text>{item.text}</Text>
              </Label>
            </View>
          )
        })}
        </CheckboxGroup>
      </View>
      <Input value={newTodoText} onInput={handleInput} className="input"></Input>
      <Button onClick={handleCLick}>add todo</Button>
    </View>
  )
}


