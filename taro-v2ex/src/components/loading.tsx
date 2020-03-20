import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'

import './loading.scss'
import spinner from '../resources/spinner.gif'

export default class Loading extends Component {
  render() {
    return (
      <View className='loading'>
        <Image src={spinner} className='img'/>
      </View>
    )
  }
}
