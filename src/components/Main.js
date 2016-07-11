import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import cssModules from 'react-css-modules';
import styles from '../style/index.scss';

@cssModules(styles)
export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <div>
        {/* this will render the child routes */}
        {this.props.children}
      </div>
    );
  }
}
