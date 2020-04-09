import { formatDate } from './common'

export const logError = (name: string, action: string, info?: string | object) => {
  if (!info) {
    info = ''
  } else if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
  let time = formatDate(new Date())
  console.error(time, name, action, info)
}
