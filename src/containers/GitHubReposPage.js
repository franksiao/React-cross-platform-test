import { connect } from 'react-redux';
import GitHubRepos from '../components/GitHubRepos';
import * as ReposAction from '../actions/repos';

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

function mapStateToProps(state) {
  const { repos } = state
  const {
    isFetching,
    lastUpdated,
    items
  } = repos || {
    isFetching: true,
    items: [],
    lastUpdated: null
  }

  return {
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(GitHubRepos);
