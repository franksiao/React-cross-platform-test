import React, { Component, PropTypes } from 'react';
import { fetchRepos  } from '../actions/repos'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class GitHubRepos extends Component {

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  componentDidMount() {
    const { dispatch, params } = this.props
    dispatch(fetchRepos(params.name));
  }

  render() {
    console.log(this.props);
    const {items} = this.props;
    return (
      <div>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Clone URL</TableHeaderColumn>
              <TableHeaderColumn>Private</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows={true}>
            {items.map( (repo, index) => (
              <TableRow key={index}>
                <TableRowColumn>{repo.id}</TableRowColumn>
                <TableRowColumn>{repo.name}</TableRowColumn>
                <TableRowColumn>{repo.clone_url}</TableRowColumn>
                <TableRowColumn>{String(repo.private)}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

GitHubRepos.propTypes = {
  items: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
}

GitHubRepos.childContextTypes ={
  muiTheme: React.PropTypes.object.isRequired
}

export default GitHubRepos;

