function pad(time: string, len: number = 3) {
  return time.substring(len)
}

/** 时间格式的转换 */
export const formatTime = time => `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`



export let globalData: any = {} // 全局公共变量
