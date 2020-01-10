import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './loading.scss'

const url = require('../resources/spiner.gif')

export default class Loading extends Component {
  render () {
    return (
      <View className='loading'>
        <Image src={url} className='img' />
      </View>
    )
  }
}
