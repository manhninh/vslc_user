/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import Screen, * as AppValues from '../../AppValues';
import TextView from '../TextView';
import styles from './styles';
import EditText from '../EditText';
import StarRating from 'react-native-star-rating';

export default class ModalRating extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onPress: PropTypes.func,
    close: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    onPress: () => {},
    close: () => {},
  };

  constructor(props) {
    super(props);
    const {visible} = this.props;
    this.state = {
      visible,
      starCount: 0,
      noteRating: undefined,
      err: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {visible} = nextProps;
    this.setState({visible});
  }

  close() {
    const {close} = this.props;
    this.setState({visible: false});
    close();
  }

  onPress() {
    const {onPress} = this.props;
    const {starCount, noteRating} = this.state;
    if (!starCount || !noteRating) {
      this.setState({err: true});
    } else {
      onPress(starCount, noteRating);
      this.setState({
        visible: false,
        starCount: 0,
        noteRating: undefined,
      });
    }
  }

  render() {
    const {visible, noteRating, err} = this.state;
    if (visible) {
      return (
        <View style={styles.container}>
          <BlurView
            viewRef={0}
            style={styles.blurView}
            blurType="light"
            blurRadius={5}
            blurAmount={5}
            overlayColor={AppValues.COLOR_BG_GRB10}
            downsampleFactor={5}
          />
          <View style={styles.view_content}>
            <View style={styles.text_pay}>
              <TextView
                style={{
                  flex: 1,
                  color: AppValues.primaryColor,
                  fontSize: AppValues.normalize(13),
                }}
                type="bold">
                Đánh giá nhân viên
              </TextView>
              <TouchableOpacity
                style={{paddingLeft: 20}}
                onPress={() => this.close()}>
                <MaterialCommunityIcons
                  name="window-close"
                  color={AppValues.primaryColor}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.content_paid}>
              <View style={{marginHorizontal: Screen.width(10)}}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  fullStarColor={AppValues.primaryColor}
                  selectedStar={rating =>
                    this.setState({
                      starCount: rating,
                    })
                  }
                />
              </View>
              <EditText
                placeholder="Góp ý!"
                value={noteRating}
                onChangeText={text => this.setState({noteRating: text})}
                multiline
                numberOfLines={3}
              />
              {err && (
                <TextView
                  style={{
                    color: 'red',
                    fontSize: AppValues.SIZE_TEXT_LABEL_SMALLER,
                  }}>
                  *Thông tin chưa đầy đủ!
                </TextView>
              )}
            </View>
            <View style={styles.View_btn}>
              <TouchableOpacity
                style={styles.btn_view_confirm}
                onPress={() => this.onPress()}>
                <View style={{justifyContent: 'center'}}>
                  <TextView
                    style={{
                      color: AppValues.COLOR_BG_WHITE,
                      padding: Screen.width(3),
                    }}
                    type="bold">
                    Gửi đánh giá
                  </TextView>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    return null;
  }
}
