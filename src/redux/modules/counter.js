import {Map} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const ADD = 'karmapa/counter/ADD';

const initialState = Map({
  value: 0
});

export default createReducer(initialState, {

  [ADD]: (state) => state.set('value', state.get('value') + 1)
});

export function add() {
  return {
    type: ADD
  };
}
