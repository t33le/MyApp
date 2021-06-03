import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeStacks from './homeStacks';
import TestScreen from '../TestScreen';

const MainNavigator = createMaterialBottomTabNavigator({
  HomeScreen: {
    path: 'homeScreen',
    screen: HomeStacks,
    navigationOptions: {
      title: 'Home'
    }
  },
  TestScreen: {
    path: 'testScreen',
    screen: TestScreen,
    navigationOptions: {
      title: 'Test'
    }
  }
}, {
  initialRouteName: 'HomeScreen',
  mode: 'card',
  headerMode: 'screen'
});

export default MainNavigator;