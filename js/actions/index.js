import fetch from 'isomorphic-fetch'
import { apiUrl } from '../settings'


export const REQUEST_SEARCH = 'REQUEST_SEARCH'

function requestSearch(searchStr) {
  return {
    type: REQUEST_SEARCH,
    searchStr
  }
}

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

function receiveSearch(searchStr, json) {
  return {
    type: RECEIVE_SEARCH,
    wikiList: json && json.query ? json.query.pages : [],
    receivedAt: Date.now(),
    searchStr
  }
}

export function fetchSearch(searchStr) {
  return dispatch => {
    dispatch(requestSearch(searchStr))
    return fetch(apiUrl + searchStr)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSearch(searchStr, json))
      )
  }
}
