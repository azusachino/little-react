import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__)

export default store
