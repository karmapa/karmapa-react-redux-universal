import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

import {mapConnect} from './../../helpers';
import {Counter} from './../../components';
import {add} from 'redux/modules/counter';

const styles = require('./Home.scss');
const logoImage = require('./logo.png');

@connect(state => mapConnect(state, {
  value: 'counter.value'
}),
{add})
export default class Home extends Component {

  static propTypes = {
    add: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  };

  render() {

    const {add, value} = this.props;

    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.pageHome}>
          <h1>Home</h1>
          <img src={logoImage} alt="karmapa logo" />
          <Counter value={value} onAddButtonClick={add} />
        </div>
      </div>
    );
  }
}
