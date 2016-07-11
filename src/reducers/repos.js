import { createReducer } from 'redux-create-reducer';
import { REQUEST_REPOS, RECIEVE_REPOS } from '../actions/repos.js';

export default function getRepos(state = {
  isFetching: false,
  items: [],
  lastUpdated: null
}, action) {
  switch (action.type) {
    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECIEVE_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.repos,
        lastUpdated: action.lastUpdated
      });
    default:
      return state
  }
}
