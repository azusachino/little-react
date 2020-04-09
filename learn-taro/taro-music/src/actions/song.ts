import {
  CHANGE_PLAY_MODE, GET_LIKE_MUSIC_LIST,
  GET_PLAYLIST_DETAIL, GET_RECOMMEND,
  GET_RECOMMEND_DJ, GET_RECOMMEND_NEW_SONG,
  GET_RECOMMEND_PLAYLIST,
  GET_SONG_DETAIL, GET_SONG_INFO,
  RESET_PLAYLIST, UPDATE_CAN_PLAYLIST,
  UPDATE_LIKE_MUSIC_LIST, UPDATE_PLAY_STATUS,
  UPDATE_RECENT_TAB
} from '../constants/song'
import api from '../services/api'

export const getSongDetail = payload => {
  return {
    type: GET_SONG_DETAIL,
    payload
  }
}
// 获取歌单详情
export const getPlayListDetail = (payload) => {
  const { id } = payload
  return dispatch => {
    dispatch({
      type: RESET_PLAYLIST
    })
    api.get('/playlist/detail', {
      id
    }).then((res) => {
      let playListDetailInfo = res.data.playlist
      playListDetailInfo.tracks = playListDetailInfo.tracks.map((item) => {
        let temp: any = {}
        temp.name = item.name
        temp.id = item.id
        temp.ar = item.ar
        temp.al = item.al
        temp.copyright = item.copyright
        return temp
      })
      dispatch({
        type: GET_PLAYLIST_DETAIL,
        payload: {
          playListDetailInfo,
          playListDetailPrivileges: res.data.privileges
        }
      })
    })
  }
}

// 获取推荐歌单
export const getRecommendPlayList = () => {
  return dispatch => {
    api.get('/personalized').then((res) => {
      let recommendPlayList = res.data.result
      dispatch({
        type: GET_RECOMMEND_PLAYLIST,
        payload: {
          recommendPlayList
        }
      })
    })
  }
}

// 获取推荐电台
export const getRecommendDj = () => {
  return dispatch => {
    api.get('/personalized/djprogram').then((res) => {
      let recommendDj = res.data.result
      dispatch({
        type: GET_RECOMMEND_DJ,
        payload: {
          recommendDj
        }
      })
    })
  }
}

// 获取推荐新音乐
export const getRecommendNewSong = () => {
  return dispatch => {
    api.get('/personalized/newsong').then((res) => {
      let recommendNewSong = res.data.result
      dispatch({
        type: GET_RECOMMEND_NEW_SONG,
        payload: {
          recommendNewSong
        }
      })
    })
  }
}

// 获取推荐精彩节目
export const getRecommend = () => {
  return dispatch => {
    api.get('/personalized/recommend').then((res) => {
      let recommend = res.data.result
      dispatch({
        type: GET_RECOMMEND,
        payload: {
          recommend
        }
      })
    })
  }
}

// 获取歌曲详情信息
export const getSongInfo = (payload) => {
  const { id } = payload
  return dispatch => {
    api.get('/song/detail', {
      ids: id
    }).then((res) => {
      let songInfo = res.data.songs[0]
      api.get('/song/url', {
        id
      }).then((res) => {
        songInfo.url = res.data.data[0].url
        api.get('/lyric', {
          id
        }).then((res) => {
          // const lrc = parse_lrc(res.data.lrc && res.data.lrc.lyric ? res.data.lrc.lyric : '');
          const lrc = {
            now_lrc: [],
            scroll: 0
          }
          res.data.lrclist = lrc.now_lrc
          res.data.scroll = lrc.scroll ? 1 : 0
          songInfo.lrcInfo = res.data
          dispatch({
            type: GET_SONG_INFO,
            payload: {
              currentSongInfo: songInfo
            }
          })
        }).catch((err) => {
          console.log('获取歌词失败', err)
          dispatch({
            type: GET_SONG_INFO,
            payload: {
              currentSongInfo: songInfo
            }
          })
        })
      }).catch((err) => {
        console.log('获取歌曲url失败', err)
        dispatch({
          type: GET_SONG_INFO,
          payload: {
            currentSongInfo: songInfo
          }
        })
      })
    })
  }
}

// 切换播放模式
export const changePlayMode = (payload) => {
  return {
    type: CHANGE_PLAY_MODE,
    payload
  }
}

// 更新播放状态
export const updatePlayStatus = (payload) => {
  return {
    type: UPDATE_PLAY_STATUS,
    payload
  }
}

// 喜欢音乐
export const likeMusic = (payload) => {
  const { like, id } = payload
  return dispatch => {
    api.get('/like', {
      id,
      like
    }).then((res) => {
      let changeFlag = res.data.code
      if (changeFlag === 200) {
        dispatch({
          type: UPDATE_LIKE_MUSIC_LIST,
          payload: {
            like,
            id
          }
        })
      }
    })
  }
}

// 获取喜欢音乐列表
export const getLikeMusicList = (payload) => {
  const { id } = payload
  return dispatch => {
    api.get('/likelist', {
      uid: id
    }).then((res) => {
      dispatch({
        type: GET_LIKE_MUSIC_LIST,
        payload: {
          likeMusicList: res.data.ids || []
        }
      })
    })
  }
}

// 更新播放列表
export const updateCanplayList = (payload) => {
  return {
    type: UPDATE_CAN_PLAYLIST,
    payload
  }
}

// 更新最近播放tab
export const updateRecentTab = (payload) => {
  return {
    type: UPDATE_RECENT_TAB,
    payload
  }
}
