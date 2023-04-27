import { useState } from 'react'
import { View, Input, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {

  const [values, setValues] = useState({})

  const [show, setShow] = useState(false)

  return <View className='index'>
    <Input
      value={values.value1}
      onInput={e => setValues({ ...values, value1: e.detail.value })}
      placeholder='输入1'
    />
    <Button onClick={() => setShow(true)}>按钮</Button>
    <View>输入1为空点击按钮会直接报错，输入1不为空，点击按钮，再输入输入1也会报错</View>
    <View>当绑定的值为空的时候就会报错</View>
    {
      show && <Input
        value={values.test}
        onInput={e => setValues({ ...values, test: e.detail.value })}
        placeholder='输入2'
      />
    }
  </View>
}
