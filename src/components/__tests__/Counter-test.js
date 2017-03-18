import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {Map} from 'immutable';

import {Counter} from './../';
import createStore from 'redux/create';
import {ApiClient} from './../../helpers';

const client = new ApiClient();

describe('Counter', () => {

  const mockStore = {};

  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <Counter />
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer);

  it('should render correctly', () => {
    return expect(renderer).to.be.ok;
  });

  it('should render with correct initial value', () => {
    const text = dom.getElementsByTagName('span')[0].textContent;
    expect(text).to.equal('0');
  });

  it('should render with an add button', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.equal('Add');
  });

  it('should render the correct className', () => {
    const styles = require('components/Counter/Counter.scss');
    expect(styles.counter).to.be.a('string');
    expect(dom.className).to.include(styles.counter);
  });
});
