import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

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
      'pages/index/index'
    ],
    tabBar: {
      list: [{
        'iconPath': 'resources/latest.png',
        'selectedIconPath': 'resources/latest_on.png',
        pagePath: 'pages/index/index',
        text: '最新'
      }, {
        'iconPath': 'resources/hotest.png',
        'selectedIconPath': 'resources/hotest_on.png',
        pagePath: 'pages/hot/hot',
        text: '热门'
      }, {
        'iconPath': 'resources/node.png',
        'selectedIconPath': 'resources/node_on.png',
        pagePath: 'pages/nodes/nodes',
        text: '节点'
      }],
      'color': '#000',
      'selectedColor': '#56abe4',
      'backgroundColor': '#fff',
      'borderStyle': 'white'
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
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
