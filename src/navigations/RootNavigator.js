import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screen/Welcome';
import Home from '../screen/Home';
import HomeNotify from '../screen/Home/HomeNotify';
import Search from '../screen/Search';
import SignIn from '../screen/SignIn';
import Register from '../screen/Register';
import Favorite from '../screen/Favorite';
import NotifyScreen from '../screen/notification/NotifyScreen';
import UserProfile from '../screen/UserProfile';
import CreateOrder from '../screen/CreateOrder';
import Order from '../screen/Order';
import ChoosePlace from '../screen/ChoosePlace';
import MapGoogle from '../screen/MapGoogle';

export const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
      },
      Home: {
        screen: Home,
      },
      HomeNotify: {
        screen: HomeNotify,
      },
      Search: {
        screen: Search,
      },
      SignIn: {
        screen: SignIn,
      },
      Register: {
        screen: Register,
      },
      Favorite: {
        screen: Favorite,
      },
      NotifyScreen: {
        screen: NotifyScreen,
      },
      UserProfile: {
        screen: UserProfile,
      },
      CreateOrder: {
        screen: CreateOrder,
      },
      Order: {
        screen: Order,
      },
      ChoosePlace: {
        screen: ChoosePlace,
      },
      MapGoogle: {
        screen: MapGoogle,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Welcome',
    },
  ),
);
