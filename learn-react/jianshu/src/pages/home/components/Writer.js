import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {WriterWrapper, WriterItem} from '../style';
import {actionCreators} from '../store'

class Writer extends PureComponent {

  render() {
    const {writerList} = this.props
    return (
      <WriterWrapper>
        <div>
          <ul>
            {writerList.map((item) => {
              return (<WriterItem key={item}>item</WriterItem>)
            })}
            <WriterItem>
              <a href='' target='_blank'>
                <img alt=''
                     src='https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'>
                </img>
              </a>
              <a className='right' state=''>
                关注
              </a>
            </WriterItem>
          </ul>
        </div>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

const mapDispatchToProps = (dispatch) => ({
  handleSubscribe(id) {
    dispatch(null)
  },
  initWriterList() {
    dispatch(actionCreators.initWriterList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
