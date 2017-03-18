import {combineReducers} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {routerReducer} from 'react-router-redux';

import auth from './auth';
import counter from './counter';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  counter
});
