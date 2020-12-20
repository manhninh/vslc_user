/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../components/colors';
import TextView from '../../components/TextView';
import HeaderBar from '../../components/HeaderBar';
import {ordersId, ordersDetailId, customers} from '../../redux/selectors';
import {
  addFavatiteStaffApiSubmit,
  evaluationStaffApiSubmit,
} from '../../redux/actions/serviceActions';
import {
  formatDate,
  formatTime,
  formatOrderState,
  formatMoney,
} from '../../helpers/formatValue';
import Screen, * as AppValues from '../../AppValues';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image} from 'react-native-elements';
import {URL_IMAGE} from '../../utils/configApp';
import Button from '../../components/Button';
import ModalRating from '../../components/ModalRating';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexShift: 0,
      showModalRating: false,
      idStaff: undefined,
    };
  }

  containerView(title, content) {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextView style={{flex: 1}}>{title}</TextView>
        <TextView style={{flex: 1, marginLeft: Screen.width(1)}}>
          {content}
        </TextView>
      </View>
    );
  }

  itemView(item) {
    const {name, code, phone, image, id} = item.staff;
    const {addFavatiteStaffApiSubmit, customers} = this.props;
    return (
      <View style={mStyles.containerItem}>
        <Image
          style={{
            width: Screen.width(20),
            height: Screen.width(20),
            borderRadius: Screen.width(10),
            marginRight: Screen.width(2),
          }}
          source={{uri: URL_IMAGE + image}}
        />
        <View style={{flex: 1}}>
          <TextView type="bold" style={{textAlign: 'center'}}>
            {name}
          </TextView>
          {this.containerView('Mã nhân viên:', code)}
          {this.containerView('Số điện thoại:', phone)}
          <View
            style={{
              marginHorizontal: Screen.width(5),
              marginTop: Screen.height(1),
              flexDirection: 'row',
            }}>
            <Button
              styleBtn={{flex: 1}}
              textButton="Thêm NV yêu thích"
              backgroundColor={Colors.GREEN}
              onPress={() => addFavatiteStaffApiSubmit(customers.id, id)}
            />
            <Button
              styleBtn={{flex: 1, marginLeft: Screen.width(2)}}
              textButton="Đánh giá nhân viên"
              backgroundColor={Colors.GREEN}
              onPress={() =>
                this.setState({showModalRating: true, idStaff: item.id})
              }
            />
          </View>
        </View>
      </View>
    );
  }

  listShift(item, index) {
    const {indexShift} = this.state;
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          borderColor: AppValues.COLOR_BG_GREY,
          borderWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
          margin: Screen.width(1),
          padding: Screen.width(1),
          backgroundColor:
            index === indexShift ? AppValues.primaryColor : 'transparent',
        }}
        onPress={() => this.setState({indexShift: index})}>
        <TextView
          type="bold"
          style={{
            color:
              index === indexShift
                ? AppValues.COLOR_BG_WHITE
                : AppValues.COLOR_BG_BLACK,
          }}>
          {formatDate(item.workTimeStart)}
        </TextView>
        <TextView
          style={{
            fontSize: AppValues.SIZE_TEXT_LABEL_SMALLER,
            color:
              index === indexShift
                ? AppValues.COLOR_BG_WHITE
                : AppValues.COLOR_BG_BLACK,
          }}>
          {formatOrderState(item.orderState).text}
        </TextView>
      </TouchableOpacity>
    );
  }

  render() {
    const {indexShift, showModalRating, idStaff} = this.state;
    const {
      ordersId,
      ordersDetailId,
      navigation,
      evaluationStaffApiSubmit,
    } = this.props;
    const {
      orderCode,
      category,
      startTime,
      endTime,
      orderState,
      address,
      totalPrice,
    } = ordersId;
    return (
      <View style={{flex: 1}}>
        <HeaderBar title="Chi tiết ca làm" btnBack navigation={navigation} />
        <ScrollView style={mStyles.service}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={[
                mStyles.status,
                {backgroundColor: formatOrderState(orderState).color},
              ]}>
              <TextView style={{color: AppValues.COLOR_BG_WHITE}}>
                {formatOrderState(orderState).text}
              </TextView>
            </View>
            <TextView>{formatDate(startTime)}</TextView>
          </View>
          <TextView style={{marginTop: Screen.width(1)}}>
            {'Loại dịch vụ: '}
            <TextView type="bold">{category.name}</TextView>
          </TextView>
          <TextView style={{marginTop: Screen.width(1)}}>
            {'Ca làm việc: ' +
              formatTime(startTime) +
              ' - ' +
              formatTime(endTime)}
          </TextView>
          <View
            style={{
              flexDirection: 'row',
              marginTop: Screen.width(1),
              marginRight: Screen.width(10),
            }}>
            <Entypo name="location" size={24} color={Colors.primaryColor} />
            <TextView style={{marginLeft: Screen.width(2)}}>
              {address.address}
            </TextView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: Screen.width(1),
              alignItems: 'center',
            }}>
            <TextView
              type="bold"
              style={{flex: 1, color: AppValues.COLOR_BG_BLUE}}>
              {formatMoney(totalPrice) + 'đ'}
            </TextView>
            <View>
              <TextView>{orderCode}</TextView>
            </View>
          </View>
          <TextView
            type="bold"
            style={{
              textAlign: 'center',
              color: AppValues.primaryColor,
              fontSize: AppValues.SIZE_TEXT_SMALL,
              marginTop: Screen.height(1),
            }}>
            Danh sách ca làm
          </TextView>
          <FlatList
            data={ordersDetailId.list}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            style={{
              paddingHorizontal: Screen.width(2),
              paddingVertical: Screen.height(1),
            }}
            renderItem={({item, index}) => this.listShift(item, index)}
          />
          {ordersDetailId.list[indexShift].lstStaff.length > 0 && (
            <View>
              <TextView
                type="bold"
                style={{
                  textAlign: 'center',
                  color: AppValues.primaryColor,
                  fontSize: AppValues.SIZE_TEXT_SMALL,
                }}>
                Nhân viên ca làm
              </TextView>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={ordersDetailId.list[indexShift].lstStaff}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return this.itemView(item);
                }}
              />
            </View>
          )}
        </ScrollView>
        <ModalRating
          visible={showModalRating}
          close={() => this.setState({showModalRating: false})}
          onPress={(starCount, noteRating) => {
            this.setState({showModalRating: false});
            evaluationStaffApiSubmit(idStaff, starCount, noteRating);
          }}
        />
      </View>
    );
  }
}

const mStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  service: {
    flex: 1,
    padding: Screen.width(2),
    backgroundColor: AppValues.COLOR_BG_WHITE,
  },
  status: {
    padding: 3,
    borderRadius: 3,
    marginRight: Screen.height(1),
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Screen.width(2),
    padding: Screen.width(2),
    marginTop: Screen.height(1),
    borderRadius: 10,
    borderColor: AppValues.COLOR_BG_GREY,
    borderWidth: 0.5,
  },
});

const mapStateToProps = state => ({
  ordersId: ordersId(state),
  ordersDetailId: ordersDetailId(state),
  customers: customers(state),
});
export default connect(
  mapStateToProps,
  {addFavatiteStaffApiSubmit, evaluationStaffApiSubmit},
)(Order);
