import React, {Component} from 'react';
import {GithubButton} from 'components';
import Helmet from 'react-helmet';

const styles = require('./Home.scss');
const logoImage = require('./logo.png');

export default class Home extends Component {

  render() {
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.pageHome}>
          <h1>Home</h1>
          <img src={logoImage} alt="logo image" />
          <GithubButton type="star" repo="karmapa-react-redux-universal" user="karmapa" width={100} height={100} />
        </div>
      </div>
    );
  }
}
