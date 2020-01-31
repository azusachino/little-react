import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Thread from './thread'
import Loading from './loading'
import { Member } from '../interfaces/member'
import { Node } from '../interfaces/node'

import './thread.scss'

interface Props {
  threads: ListThread[],
  loading: boolean
}

interface ListThread {
  title: string,
  member: Member,
  node: Node,
  last_modified: number,
  id: number,
  replies: number
  key?: number
}

class ThreadList extends Component<Props, {}> {
  static defaultProps = {
    threads: [],
    loading: true
  }

  render () {
    const { loading, threads } = this.props

    if (loading) {
      return <Loading />
    }

    const element = threads.map((thread) => {
      return (
        <Thread
          key={thread.id}
          node={thread.node}
          title={thread.title}
          last_modified={thread.last_modified}
          replies={thread.replies}
          tid={thread.id}
          member={thread.member}
        />
      )
    })

    return (
      <View className='thread-list'>
        {element}
      </View>
    )
  }
}

export { ThreadList }
