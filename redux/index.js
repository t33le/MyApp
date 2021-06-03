import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

// https://extension.remotedev.io/docs/API/Arguments.html
const devToolsConfig = {
  latency: 500, // default
  maxAge: 50 // default
};

const composeEnhancers = composeWithDevTools(devToolsConfig);
const middlewares = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, middlewares);
const persistor = persistStore(store);
  
export {
  store,
  persistor
};