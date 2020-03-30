import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ThreadList } from '../../components/thread_list'
import { Thread } from '../../interfaces/thread'
import api from '../../utils/api'

import './index.scss'

interface State {
  loading: boolean,
  threads: Thread[]
}

class Hot extends Component<{}, State> {
  config = {
    navigationBarTitleText: '热门'
  }

  state = {
    loading: true,
    threads: []
  }

  async componentDidMount () {
    try {
      const res = await Taro.request<Thread[]>({
        url: api.getHotNodes(),
        mode: 'cors'
      })
      this.setState({
        threads: res.data,
        loading: false
      })
    } catch (error) {
      await Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  render () {
    const { loading, threads } = this.state
    return (
      <View className='index'>
        <ThreadList
          threads={threads}
          loading={loading}
        />
      </View>
    )
  }
}

export default Hot
