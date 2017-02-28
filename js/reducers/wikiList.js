import { RECEIVE_WIKI_LIST } from '../actions'

export default function wikiList(state = [], action) {
  switch (action.type) {
    case RECEIVE_WIKI_LIST:
      return action.wikiList

    default:
      return state
  }
}
