import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { combineReducers } from 'redux';
import globalReducers from './reducers';
import commonReducers from '../modules/commons/redux/reducers';

const persistConfig = {
  key: 'myapp_root',
  storage: AsyncStorage,
  whitelist: []
};

const rootReducer = combineReducers({
  todo: (state = { test: true }, action) => {
    return state;
  },
  globalReducers,
  commonReducers
});

export default persistReducer(persistConfig, rootReducer);