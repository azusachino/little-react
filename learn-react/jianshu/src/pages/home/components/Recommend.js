import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem, QrCode} from '../style';
import {actionCreators} from '../store'

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        <div>
          {
            this.props.list.map((item) => {
              return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            })
          }
        </div>
        <QrCode>

        </QrCode>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (dispatch) => ({
  handleSomething() {
    const action = actionCreators.initWriterList();
    dispatch(action)
  }
})

export default connect(mapState, mapDispatchToProps)(Recommend);
