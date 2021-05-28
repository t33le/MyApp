import { combineReducers } from 'redux';

export default combineReducers({
  todo: (state = { test: true }, action) => {
    return {...state};
  }
});