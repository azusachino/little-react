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
import { SongType } from '../constants/types'

const INITIAL_STATE: SongType = {
  playListDetailInfo: {
    coverImgUrl: '',
    name: '',
    playCount: 0,
    tags: [],
    creator: {
      avatarUrl: '',
      nickname: ''
    },
    tracks: []
  },
  canPlayList: [],
  playListDetailPrivileges: [],
  recommendPlayList: [],
  recommendDj: [],
  recommendNewSong: [],
  recommend: [],
  myCreateList: [],
  myCollectList: [],
  currentSongId: '',
  currentSongInfo: {
    id: 0,
    name: '',
    ar: [],
    al: {
      picUrl: '',
      name: ''
    },
    url: '',
    lrcInfo: '',
    dt: 0, // 总时长，ms
    st: 0 // 是否喜欢
  },
  currentSongIndex: 0,
  playMode: 'loop',
  likeMusicList: [],
  isPlaying: false,
  recentTab: 0
}

export default function song(state = INITIAL_STATE, action) {
  switch (action.type) {
    // 获取歌曲详情
    case GET_SONG_DETAIL:
      return {
        ...state
      }
    // 获取歌单详情
    case GET_PLAYLIST_DETAIL:
      const { playListDetailInfo, playListDetailPrivileges } = action.payload
      let canPlayList = playListDetailInfo.tracks.filter((_, index) => {
        return playListDetailPrivileges[index].st !== -200
      })
      return {
        ...state,
        playListDetailInfo,
        playListDetailPrivileges,
        canPlayList
      }
    case RESET_PLAYLIST:
      return {
        ...state,
        playListDetailInfo: INITIAL_STATE.playListDetailInfo,
        playListDetailPrivileges: [],
        canPlayList: []
      }
    // 获取推荐歌单
    case GET_RECOMMEND_PLAYLIST:
      const { recommendPlayList } = action.payload
      return {
        ...state,
        recommendPlayList
      }
    // 获取推荐电台
    case GET_RECOMMEND_DJ:
      const { recommendDj } = action.payload
      return {
        ...state,
        recommendDj
      }
    // 获取推荐新音乐
    case GET_RECOMMEND_NEW_SONG:
      const { recommendNewSong } = action.payload
      return {
        ...state,
        recommendNewSong
      }
    // 获取推荐精彩节目
    case GET_RECOMMEND:
      const { recommend } = action.payload
      return {
        ...state,
        recommend
      }
    // 获取歌曲详情
    case GET_SONG_INFO:
      const { currentSongInfo } = action.payload
      let currentSongIndex = state.canPlayList.findIndex(item => item.id === currentSongInfo.id)
      state.canPlayList.map((item, index) => {
        item.current = currentSongIndex === index
        return item
      })
      return {
        ...state,
        currentSongInfo,
        currentSongIndex,
        canPlayList: state.canPlayList
      }
    // 切换播放模式
    case CHANGE_PLAY_MODE:
      const { playMode } = action.payload
      return {
        ...state,
        playMode
      }
    // 获取喜欢列表
    case GET_LIKE_MUSIC_LIST:
      const { likeMusicList } = action.payload
      return {
        ...state,
        likeMusicList
      }
    // 更新喜欢列表
    case UPDATE_LIKE_MUSIC_LIST:
      const { like, id } = action.payload
      let list: Array<number> = []
      if (like) {
        list = state.likeMusicList.concat([id])
      } else {
        state.likeMusicList.forEach((item) => {
          if (item !== id) list.push(item)
        })
      }
      return {
        ...state,
        likeMusicList: list
      }
    case UPDATE_PLAY_STATUS:
      const { isPlaying } = action.payload
      return {
        ...state,
        isPlaying
      }
    case UPDATE_CAN_PLAYLIST:
      currentSongIndex = action.payload.canPlayList.findIndex(item => item.id === action.payload.currentSongId)
      return {
        ...state,
        canPlayList: action.payload.canPlayList,
        currentSongIndex
      }
    case UPDATE_RECENT_TAB:
      const { recentTab } = action.payload
      return {
        ...state,
        recentTab
      }
    default:
      return state
  }
}
