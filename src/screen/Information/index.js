/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Screen, * as AppValues from '../../AppValues';
import TextView from '../../components/TextView';
import Entypo from 'react-native-vector-icons/Entypo';

class InfoScreen extends React.Component {
  handleClick = URL => {
    Linking.canOpenURL(URL).then(link => {
      if (link) {
        Linking.openURL(URL);
      } else {
        console.log(`Don't know how to open URI: ${URL}`);
      }
    });
  };

  itemView(title, content) {
    return (
      <TextView style={styles.viewTextInfo}>
        <TextView style={styles.viewText} type="bold">
          {title}
        </TextView>
        {content}
      </TextView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Thông tin" />
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: Screen.width(2),
            backgroundColor: AppValues.COLOR_BG_WHITE,
          }}>
          <View style={{alignItems: 'center', marginTop: Screen.height(3)}}>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={require('../../image/logonhasach.png')}
            />
            <TextView style={styles.viewTextTittle}>
              Công ty TNHH dịch vụ
            </TextView>
            <TextView type="bold" style={styles.viewTextTittle}>
              NHÀ SẠCH LÀO CAI
            </TextView>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.itemIcon}>
              <Entypo name="phone" size={25} color={AppValues.primaryColor} />
            </View>
            <View style={styles.itemContent}>
              <TextView>Điện thoại:</TextView>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:0981275018')}>
                  <TextView type="bold" style={styles.viewTextColor}>
                    0981275018
                  </TextView>
                </TouchableOpacity>
                <TextView type="bold" style={styles.viewTextColor}>
                  {' - '}
                </TextView>
                <TouchableOpacity
                  onPress={() => Linking.openURL('tel:0968602718')}>
                  <TextView type="bold" style={styles.viewTextColor}>
                    0968602718
                  </TextView>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.itemContainer}>
            <View style={styles.itemIcon}>
              <Entypo name="globe" size={25} color={AppValues.primaryColor} />
            </View>
            <View style={styles.itemContent}>
              <TextView>Website:</TextView>
              <TouchableOpacity
                onPress={() => this.handleClick('https://nhasachlaocai.com')}>
                <TextView type="bold" style={styles.viewTextColor}>
                  https://nhasachlaocai.com
                </TextView>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.itemContainer}>
            <View style={styles.itemIcon}>
              <Entypo
                name="facebook-with-circle"
                size={25}
                color={AppValues.primaryColor}
              />
            </View>
            <View style={styles.itemContent}>
              <TextView>Facebook:</TextView>
              <TouchableOpacity
                onPress={() =>
                  this.handleClick('https://www.facebook.com/nhasachlaocai/')
                }>
                <TextView type="bold" style={styles.viewTextColor}>
                  https://www.facebook.com/nhasachlaocai
                </TextView>
              </TouchableOpacity>
            </View>
          </View>
          {this.itemView(
            'Văn phòng đại diện: ',
            '054 Lê Văn Thiêm, phường Bắc Cường, thành phố Lào Cai, tỉnh Lào Cai',
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewText: {
    fontSize: AppValues.normalize(11),
  },
  viewTextTittle: {
    fontSize: AppValues.normalize(15),
    color: AppValues.primaryColor,
  },
  viewTextColor: {
    fontSize: AppValues.normalize(11),
    color: AppValues.primaryColor,
  },
  viewTextInfo: {
    marginTop: Screen.height(1),
    fontSize: AppValues.normalize(11),
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: AppValues.primaryColor,
  },
  itemContent: {
    marginLeft: Screen.width(3),
  },
  line: {
    backgroundColor: AppValues.primaryColor,
    width: '100%',
    height: 0.6,
    marginVertical: Screen.height(1),
  },
});

export default InfoScreen;
