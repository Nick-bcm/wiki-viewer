import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const initialState = {
  isFetching: false,
  wikiList: []
}

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      loggerMiddleware
    )
  )
}
