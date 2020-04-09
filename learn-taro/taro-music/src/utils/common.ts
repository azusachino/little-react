import Taro from '@tarojs/taro'

export const formatNumber = (n: number | string): string => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' '
    + [hour, minute, second].map(formatNumber).join(':')
}

export const saveKeyword = (keyword: string) => {
  const keywordList: Array<string> = Taro.getStorageSync('keywordList') || []
  const index = keywordList.findIndex((item) => item === keyword)
  if (index >= 0) {
    keywordList.splice(index, 1)
  }
  keywordList.unshift(keyword)
  Taro.setStorage({
    key: 'keywordList',
    data: keywordList
  })
    .then(() => 'ok')
}

// 获取搜索关键字
export const getKeyword = (): Array<string> => {
  return Taro.getStorageSync('keywordList')
}

// 清除搜索关键字
export const clearKeyword = () => {
  Taro.removeStorageSync('keywordList')
}
