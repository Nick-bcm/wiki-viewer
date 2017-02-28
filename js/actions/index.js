import fetch from 'isomorphic-fetch'
import { API_URL } from '../settings'

export const REQUEST_WIKI_LIST = 'REQUEST_WIKI_LIST'

function requestSearch(searchStr) {
  return {
    type: REQUEST_WIKI_LIST,
    searchStr
  }
}

export const RECEIVE_WIKI_LIST = 'RECEIVE_WIKI_LIST'

function receiveSearch(json) {
  return {
    type: RECEIVE_WIKI_LIST,
    wikiList: json && json.query ? json.query.pages : [],
    receivedAt: Date.now()
  }
}

export function fetchSearch(searchStr) {
  return dispatch => {
    dispatch(requestSearch(searchStr))
    return fetch(API_URL + searchStr)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSearch(json))
      )
  }
}
