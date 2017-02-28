import { REQUEST_WIKI_LIST, RECEIVE_WIKI_LIST } from '../actions'

export default function isFetching(state = false, action) {
  switch (action.type) {
    case REQUEST_WIKI_LIST:
      return true;
    case RECEIVE_WIKI_LIST:
      return false;

    default:
      return state
  }
}