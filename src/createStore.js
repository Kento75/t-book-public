import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'


export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
}