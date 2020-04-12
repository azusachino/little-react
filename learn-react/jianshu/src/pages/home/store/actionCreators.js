import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

const _initWriterList = (result) => ({
  type: constants.INIT_WRITER_LIST,
  writerList: fromJS(result)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result));
    });
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

export const initWriterList = () => {
  return (dispatch) => {
    axios.get('api/writer.json')
      .then((res) => {
        const result = res.data.data;
        dispatch(_initWriterList(result))
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
