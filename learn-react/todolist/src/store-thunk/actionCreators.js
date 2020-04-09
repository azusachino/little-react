import axios from 'axios'
import { CHANGE_INPUT_VALUE, INIT_LIST_ACTION } from './actionTypes'

export const getInputChangeAction = (val) => ({
  type: CHANGE_INPUT_VALUE,
  value: val
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json')
      .then((res) => {
        const data = res.data
        dispatch(initListAction(data))
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
