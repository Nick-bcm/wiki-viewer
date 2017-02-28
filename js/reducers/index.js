import { combineReducers } from 'redux'
import isFetching from './isFetching'
import wikiList from './wikiList'

export default combineReducers({
  isFetching,
  wikiList
})
