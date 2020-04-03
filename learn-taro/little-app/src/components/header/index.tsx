import Taro, { Component } from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import 'index.scss'
import Top from '../top'

class Header extends Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      store: {
        title: 'RabbitHouse',
        notice: 'welcome',
        tag: ['good', 'better']
      }
    }
  }

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <View className='header'>
        <Top/>
        <Image className='background' src={require('../../../assets')}/>
        <View className='store'>
          <Image className='store_img' src={require('')}/>
          <View className='store_text'>
            <Text>{this.state.store.title}</Text>
            <Text>{this.state.store.notice}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Header
