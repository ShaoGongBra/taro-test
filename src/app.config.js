const config = defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})

const arr = [1, 2, 3, 4, 5]

console.log(arr.map(v => {
  console.log('箭头函数不会被执行，且除了剪头函数之外，还有多个es6的语法似乎也不执行，3.6.2版本上是正常的')
  return v + 2
}))

export default config
