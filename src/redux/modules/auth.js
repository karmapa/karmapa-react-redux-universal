import {Map} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const LOAD_AUTH = 'karmapa/auth/LOAD_AUTH';
const LOAD_AUTH_SUCCESS = 'karmapa/auth/LOAD_AUTH_SUCCESS';
const LOAD_AUTH_FAIL = 'karmapa/auth/LOAD_AUTH_FAIL';

const LOGIN = 'karmapa/auth/LOGIN';
const LOGIN_SUCCESS = 'karmapa/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'karmapa/auth/LOGIN_FAIL';

const LOGOUT = 'karmapa/auth/LOGOUT';
const LOGOUT_SUCCESS = 'karmapa/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'karmapa/auth/LOGOUT_FAIL';

const initialState = Map({

  isAuthLoaded: false,
  isAuthLoading: false,
  errorAuth: null

});

export default createReducer(initialState, {

  [LOAD_AUTH]: (state) => state.set('isAuthLoading', true),

  [LOAD_AUTH_SUCCESS]: (state, action) => {
    return state.set('isAuthLoading', false)
      .set('isAuthLoaded', false)
      .set('user', action.result);
  },

  [LOAD_AUTH_FAIL]: (state, action) => {
    return state.set('isAuthLoading', false)
      .set('isAuthLoaded', false)
      .set('errorAuth', action.error);
  },

  [LOGIN]: (state) => state.set('loggingIn', true),

  [LOGIN_SUCCESS]: (state, action) => {
    return state.set('loggingIn', false)
      .set('user', action.result);
  },

  [LOGIN_FAIL]: (state, action) => {
    return state.set('loggingIn', false)
      .set('user', null)
      .set('loginError', action.error);
  },

  [LOGOUT]: (state) => state.set('loggingOut', true),

  [LOGOUT_SUCCESS]: (state) => {
    return state.set('loggingOut', false)
      .set('user', null);
  },

  [LOGOUT_FAIL]: (state, action) => {
    return state.set('loggingOut', false)
      .set('logoutError', action.error);
  }

});

export function isAuthLoaded(globalState) {
  return globalState.auth && globalState.auth.get('isAuthLoaded');
}

export function loadAuth() {
  return {
    types: [LOAD_AUTH, LOAD_AUTH_SUCCESS, LOAD_AUTH_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
