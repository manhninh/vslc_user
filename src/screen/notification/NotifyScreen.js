/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '../../components/colors';
import TextView from '../../components/TextView';
import NotificationTabScreen from './NotificationTabScreen';
import DiscountTabScreen from './DiscountTabScreen';
import HeaderBar from '../../components/HeaderBar';

const initialLayout = {width: Dimensions.get('window').width};

const NotifyScreen = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'THÔNG BÁO'},
    {key: 'second', title: 'KHUYẾN MÃI'},
  ]);

  const renderScene = SceneMap({
    first: NotificationTabScreen,
    second: DiscountTabScreen,
  });

  return (
    <View style={{flex: 1}}>
      <HeaderBar title="Thông báo" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: Colors.primaryColor}}
            style={{
              backgroundColor: Colors.WHITE,
              // height: Dimensions.get('window').height / 12,
              height: 50,
              justifyContent: 'center',
            }}
            renderLabel={({route, focused}) => (
              <TextView
                type="bold"
                style={{
                  color: focused ? Colors.primaryColor : Colors.BACKDROP,
                }}>
                {route.title}
              </TextView>
            )}
          />
        )}
      />
    </View>
  );
};

export default NotifyScreen;
