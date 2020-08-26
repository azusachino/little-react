import React from 'react'
import {
  createStore,
  combineReducers,
  bindActionCreators
} from "redux";


function run() {
  const initState = {
    count: 0
  }
  const counter = (state = initState, action) => {
    switch (action["type"]) {
      case "PlUS_ONE":
        return {count: state.count + 1}
      case "MINUS_ONE":
        return {count: state.count - 1}
      case "CUSTOM_COUNT":
        return {count: state.count + action.payload.count}
      default:
        break
    }
    return state
  }

  const todos = (state = {}) => state

  const store = createStore(
    combineReducers(
      {
        todos,
        counter
      }
    )
  )

  function plusOne() {
    return {type: "PLUS_ONE"}
  }

  function minusOne() {
    return {type: "MINUS_ONE"}
  }

  function customCount(count) {
    return {type: "CUSTOM_COUNT", payload: count}
  }

  const plusOneAction = bindActionCreators(plusOne, store.dispatch)
  // 添加监听器
  store.subscribe(() => console.log(store.getState()))

  // 可以bindActionCreators
  plusOneAction()
  // 或者直接dispatch action
  store.dispatch(minusOne())
  store.dispatch(customCount(12))
}

export default () => (
  <div>
    <button onClick={run}>Run</button>
    <p>open console to see changes</p>
  </div>
)
