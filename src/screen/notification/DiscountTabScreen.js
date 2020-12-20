/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import DiscountItem from '../../components/DiscountItem';

const mockData = [
  {
    id: '1',
    title: 'Hè về rực rỡ - Nhà sạch hết cỡ',
    startTime: '15/06/2020',
    endTime: '30/06/2020',
    img: require('../../image/discount-1.jpg'),
  },
  {
    id: '2',
    title: 'Tổng vệ sinh khử khuẩn chỉ 550k',
    startTime: '01/06/2020',
    endTime: '30/06/2020',
    img: require('../../image/discount-2.jpg'),
  },
  {
    id: '3',
    title: 'Tổng vệ sinh khử khuẩn chỉ 550k',
    startTime: '01/06/2020',
    endTime: '30/06/2020',
    img: require('../../image/discount-3.jpg'),
  },
  {
    id: '4',
    title: 'Nhập mã KDT40 - Đặt giúp việc thả ga',
    startTime: '01/06/2020',
    endTime: '30/06/2020',
    img: require('../../image/discount-3.jpg'),
  },
];

class DiscountTabScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingBottom: 10, backgroundColor: 'white'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mockData}
          keyExtractor={(notif, index) => notif.id}
          renderItem={({item}) => {
            return <DiscountItem data={item} onPress={() => {}} />;
          }}
        />
      </View>
    );
  }
}

export default DiscountTabScreen;
