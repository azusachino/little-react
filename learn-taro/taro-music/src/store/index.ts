import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const compositeEnhancers = typeof window === 'object' &&
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose

const middleWares = [thunkMiddleware]

if ('development' === process.env.NODE_ENV) {
  middleWares.push(require('redux-logger').createLogger())
}

const enhancer = compositeEnhancers(
  applyMiddleware(...middleWares)
)

export default function configStore() {
  return createStore(rootReducer, enhancer)
}

