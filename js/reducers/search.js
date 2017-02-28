import fetch from 'isomorphic-fetch'
import { REQUEST_SEARCH, RECEIVE_SEARCH } from '../actions'

export default function search(state = {
  isFetching: false,
  wikiList: []
}, action) {
  switch (action.type) {
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        wikiList: action.wikiList,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
