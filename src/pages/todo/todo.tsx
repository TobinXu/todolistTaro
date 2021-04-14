import { Component, useState } from 'react'
import { View, Text, Input, Button, EventProps, Checkbox, Label, CheckboxGroup, Navigator, ScrollView } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'
import Taro from '@tarojs/taro'
import { CheckboxGroupProps } from '@tarojs/components/types/CheckboxGroup'

import './todo.scss'

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
    
    Taro.getSystemInfo().then((res) => {
      console.log(res.windowHeight,"可使用窗口高度")
    })
    console.log('另一种获取高度的方法！！',Taro.getSystemInfoSync()['windowHeight'])


    setTodoList(prevList => {
      return prevList.map(item => {
        return {
          text: item.text,
          isComplete: e.detail.value.indexOf(item.text) > -1
        }
      })
    })
  }

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
      <Input value={newTodoText} onInput={handleInput} className="input" ></Input>
      <Button onClick={handleCLick}>add a todo</Button>
      
      <Navigator url="/pages/home/home" openType="switchTab">去主页</Navigator>
    </View>
  )
}


// export default class Index extends Component {


  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }
