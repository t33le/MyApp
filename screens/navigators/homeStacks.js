import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen';
import BPScreen from '../measureScreens/BPScreen';

const HomeStacks = createStackNavigator({
  HomeScreen: {
    path: 'home',
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    })
  },
  BPScreen: {
    path: 'measureBP',
    screen: BPScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Measure BP'
    })
  }
}, {
  initialRouteName: 'HomeScreen',
  mode: 'card',
  headerMode: 'screen'
});

export default HomeStacks;