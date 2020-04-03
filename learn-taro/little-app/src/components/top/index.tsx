import Taro, { Component } from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

class Top extends Component<any, any> {

  constructor(props: Readonly<any>) {
    super(props)
  }

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
  }
}

export default Top
