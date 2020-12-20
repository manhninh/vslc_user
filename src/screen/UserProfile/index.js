import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../components/colors';
import {Avatar} from 'react-native-elements';
import HeaderBar from '../../components/HeaderBar';
import Screen, * as AppValues from '../../AppValues';
import {
  NavigationReset,
  updateFcmTokenApiSubmit,
} from '../../redux/actions/anotherActions';
import {ACCESS_TOKEN} from '../../utils/configApp';
import AsyncStorage from '@react-native-community/async-storage';
import {customers} from '../../redux/selectors';

class UserProfileScreen extends Component {
  loguot() {
    const {NavigationReset, updateFcmTokenApiSubmit} = this.props;
    Alert.alert('Thông báo', 'Bạn thực sự muốn đăng xuất?', [
      {
        text: 'ĐỒNG Ý',
        onPress: async () => {
          NavigationReset('SignIn');
          updateFcmTokenApiSubmit(null);
          AsyncStorage.removeItem(ACCESS_TOKEN);
        },
      },
      {
        text: 'HUỶ',
        style: 'cancel',
      },
    ]);
  }

  render() {
    const {navigation, customers} = this.props;
    return (
      <View style={{flex: 1}}>
        <HeaderBar
          title="Cá nhân"
          btnBack
          navigation={navigation}
          textBtnRight="Đăng xuất"
          onPressRight={() => this.loguot()}
        />
        <View style={{flex: 1, backgroundColor: AppValues.COLOR_BG_WHITE}}>
          <View style={mStyles.avatarContainer}>
            <Avatar
              size={120}
              rounded
              source={require('../../image/avatar.png')}
              containerStyle={{
                borderWidth: 2,
                borderColor: '#ffffff',
                margin: 10,
              }}
            />
          </View>
          <View>
            <View style={mStyles.textContainer}>
              <Text style={mStyles.textTitle}>Họ tên</Text>
              <Text style={mStyles.textInfo}>{customers.name}</Text>
            </View>
            <View style={mStyles.textContainer}>
              <Text style={mStyles.textTitle}>Số điện thoại</Text>
              <Text style={mStyles.textInfo}>{customers.phone}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  customers: customers(state),
});
export default connect(
  mapStateToProps,
  {NavigationReset, updateFcmTokenApiSubmit},
)(UserProfileScreen);

const mStyles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 5,
  },
  headerRightText: {
    color: Colors.primaryColor,
    fontSize: 16,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor: Colors.GRAY,
    borderTopWidth: 1,
  },
  textTitle: {
    flex: 1,
    fontSize: 18,
    color: Colors.WEIGHT_GRAY,
  },
  textInfo: {
    flex: 1,
    fontSize: 18,
    color: Colors.BACKDROP,
  },
});
