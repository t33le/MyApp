import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'myapp_root',
  storage: AsyncStorage,
  whitelist: []
};

// https://extension.remotedev.io/docs/API/Arguments.html
const devToolsConfig = {
  latency: 500, // default
  maxAge: 50 // default
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools(devToolsConfig);
const middlewares = composeEnhancers(applyMiddleware(thunk));
const store = createStore(persistedReducer, middlewares);

const persistor = persistStore(store);
  
export {
  store,
  persistor
};