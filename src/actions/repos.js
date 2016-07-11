import fetch from 'isomorphic-fetch';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECIEVE_REPOS = 'RECIEVE_REPOS';

function requestRepos(name) {
  return {
    type: REQUEST_REPOS,
    name
  };
}

function receiveRepos(name, json) {
  return {
    type: RECIEVE_REPOS,
    name,
    repos: json,
    lastUpdated: Date.now()
  };
}


export function fetchRepos(name) {
  return dispatch => {
    dispatch(requestRepos(name));
    return fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(json => dispatch(receiveRepos(name, json)));
  };
}
