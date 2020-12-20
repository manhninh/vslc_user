/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import Screen, * as AppValues from '../../AppValues';
import TextView from '../../components/TextView';
import EditText from '../../components/EditText/EditTextCustoms';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {
  NavigationReset,
  loginApiSubmit,
} from '../../redux/actions/anotherActions';
import Backdrop from '../../components/Backdrop/Backdrop';
import AppConfig from '../../utils/validate';

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPhone: undefined,
    };
  }

  login() {
    const {numberPhone} = this.state;
    const {loginApiSubmit} = this.props;
    if (!numberPhone) {
      Alert.alert('Thông báo', 'Nhập số điện thoại của bạn!');
      return;
    }

    if (!AppConfig.PHONE_REGEX.test(numberPhone)) {
      Alert.alert('Thông báo', 'Số điện thoại không hợp lệ');
      return;
    }
    loginApiSubmit(numberPhone);
  }

  render() {
    const {numberPhone} = this.state;
    return (
      <Backdrop image="home.jpg">
        <ScrollView style={{paddingHorizontal: Screen.width(10)}}>
          <View style={{alignItems: 'center', marginTop: Screen.height(10)}}>
            <Image
              style={{
                width: 200,
                height: 200,
              }}
              source={require('../../image/logonhasach.png')}
            />
          </View>
          <View style={{alignItems: 'center', marginBottom: Screen.height(2)}}>
            <TextView
              // type="bold"
              fontSize={AppValues.SIZE_TEXT_MEDIUM}
              style={{color: AppValues.primaryColor}}>
              Nhà sạch Lào Cai xin chào!
            </TextView>
          </View>
          <EditText
            placeholder="Nhập số điện thoại"
            keyboardType="number-pad"
            value={numberPhone}
            onChangeText={text => this.setState({numberPhone: text})}
          />
          <View style={{marginTop: Screen.height(4)}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3DD03D',
                borderWidth: 0.5,
                borderRadius: 5,
                padding: Screen.height(1),
                marginHorizontal: Screen.width(10),
              }}
              onPress={() => this.login()}>
              <TextView style={{textAlign: 'center'}}>ĐĂNG NHẬP</TextView>
            </TouchableOpacity>
            {/* <Button textButton="ĐĂNG NHẬP" onPress={() => this.login()} /> */}
          </View>
        </ScrollView>
      </Backdrop>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {NavigationReset, loginApiSubmit},
)(SingIn);
