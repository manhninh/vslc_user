/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Screen, * as AppValues from '../../AppValues';
import HistoryScreen from '../history';
import TextView from '../../components/TextView';
import NewsFeed from '../NewsFeed';
import Favorite from '../Favorite';
import NotifyScreen from '../notification/NotifyScreen';
import Information from '../Information';

const ROUTE_NAME = {
  INBOX: 'Inbox',
  HISTORY: 'HistoryScreen',
  INFORMATION: 'Information',
  FAVORITE: 'Favorite',
  NOTIFY: 'NotifyScreen',
};

const TabNavigator = createBottomTabNavigator(
  {
    Inbox: {screen: NewsFeed},
    HistoryScreen: {screen: HistoryScreen},
    Favorite: {screen: Favorite},
    NotifyScreen: {screen: NotifyScreen},
    Information: {screen: Information},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        let label;
        switch (routeName) {
          case ROUTE_NAME.INBOX:
            label = 'Đặt DV';
            iconName = 'edit';
            // Sometimes we want to add badges to some icons.
            // You can check the implementation below
            // IconComponent = HomeIconWithBadge;
            break;
          case ROUTE_NAME.HISTORY:
            label = 'Lịch Sử';
            iconName = 'clock-o';
            break;
          case ROUTE_NAME.FAVORITE:
            label = 'NVYT';
            iconName = 'heart';
            break;
          case ROUTE_NAME.NOTIFY:
            label = 'Thông Báo';
            iconName = 'bell-o';
            break;
          case ROUTE_NAME.INFORMATION:
            label = 'Thông Tin';
            iconName = 'info';
            break;
          default:
            break;
        }

        // You can return any component that you like here!
        return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconComponent name={iconName} size={25} color={tintColor} />
            <TextView
              style={{
                textAlign: 'center',
                color: tintColor,
                fontSize: AppValues.SIZE_TEXT_LABEL_SMALLER,
              }}>
              {label}
            </TextView>
          </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: AppValues.primaryColor,
      inactiveTintColor: AppValues.COLOR_BG_GREY,
      showLabel: false,
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
  },
);

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(TabNavigator);
