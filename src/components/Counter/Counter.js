import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

const styles = require('./Counter.scss');

export default class GithubButton extends Component {

  static propTypes = {
    onAddButtonClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  };

  render() {

    const {value, onAddButtonClick} = this.props;

    return (
      <div className={styles.counter}>
        <span className={styles.value}>{value}</span>
        <Button bsStyle="success" onClick={onAddButtonClick}>Add</Button>
      </div>
    );
  }
}
