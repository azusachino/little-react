import {useState} from 'react'

export function useSWitch(init: boolean = false): [boolean, () => void, () => void] {
  const [switcher, setSwitcher] = useState(init)
  const turnOn = () => setSwitcher(true)
  const turnOff = () => setSwitcher(false)
  return [switcher, turnOn, turnOff]
}
