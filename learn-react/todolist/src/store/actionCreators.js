import {} from './actionTypes'
import { CHANGE_INPUT_VALUE } from './actionTypes'

export const getInputChangeAction = (val) => ({
  type: CHANGE_INPUT_VALUE,
  value: val
})
