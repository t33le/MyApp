/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, useColorScheme, View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux';

// import PNHelpers from './PushNotification';

import { createAppContainer } from 'react-navigation';
import MainNavigator from './screens/navigators';
import { globalActions } from './redux/actions';

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // setTimeout(() => {
    //   console.log('sending Test push Notification');
    //   PNHelpers.pushLocalPN({
    //     title: 'Test',
    //     message: 'Test Message'
    //   })
    // }, 10000);
    
  }, []);
  
  console.log('hereee', persistor.getState());

  const getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContainer 
          onNavigationStateChange={(prevState, curState) => {
            const prevRoute = getActiveRouteName(prevState);
            const curRoute = getActiveRouteName(curState);
            if (prevRoute !== curRoute) {
              // use for screen tracking
              store.dispatch(globalActions.setNavigationRoutes(prevRoute, curRoute))
            }
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
