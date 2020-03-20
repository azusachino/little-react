import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'

import Index from './pages/index'

import './app.scss'

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/nodes/nodes',
      'pages/hot/hot',
      'pages/node_detail/node_detail',
      'pages/thread_detail/thread_detail'
    ],
    tabBar: {
      list: [{
        iconPath: 'resources/latest.png',
        selectedIconPath: 'resources/latest_on.png',
        pagePath: 'pages/index/index',
        text: '最新'
      }, {
        iconPath: 'resources/hotest.png',
        selectedIconPath: 'resources/hotest_on.png',
        pagePath: 'pages/hot/hot',
        text: '热门'
      }, {
        iconPath: 'resources/node.png',
        selectedIconPath: 'resources/node_on.png',
        pagePath: 'pages/nodes/nodes',
        text: '节点'
      }],
      color: '#000',
      selectedColor: '#56abe4',
      backgroundColor: '#fff',
      borderStyle: 'white'
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'V2EX',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
        <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
