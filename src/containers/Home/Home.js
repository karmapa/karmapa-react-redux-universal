import React, {Component} from 'react';
import {Link} from 'react-router';
import {GithubButton} from 'components';
import Helmet from 'react-helmet';

import config from '../../config';

const styles = require('./Home.scss');
const logoImage = require('./logo.png');

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.pageHome}>
          <h1>Home</h1>
        </div>
      </div>
    );
  }
}
