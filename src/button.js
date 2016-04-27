
import { COLORS , TEXT_COLORS } from './color';
//ES6
import React, {
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Component
} from 'react-native';

const SECONDARY = 'secondary';
const PRIMARY = 'primary';

export default class Button extends Component {
  props: {
    type: SECONDARY | PRIMARY ;
    resource : any;
    value: string;
    style: any;
    disabled: bool;
    size: 'lg' | 'sm' | 'norm';
    onPress: () => void;
  }

  static defaultProps = {
      type: SECONDARY,
      value: '按钮',
      size: 'norm',
      disabled: false
  }

  getContainerStyle(size){
    let containerMap = {
      'sm':'containerSM',
      'lg':'containerLG',
      'norm':'container',
    };
    let containerStyle = containerMap[size];
    return styles[containerStyle];
  }

  render() {
    const {value , size, type , disabled , resource } = this.props;
    let iconTag;
    if (resource) {
      iconTag = <Image source={resource} style={ styles.icon} />;
    }

    let buttonStyle = styles[`${type}Button`];
    let textStyle = styles[`${type}Text`];
    let disabledStyle = disabled ? styles['buttonDisabled'] : {};
    //let handlePress = disabled ? this.props.onPress : () => {};
    let content = (
      <View style={[contentStyle,styles.button, buttonStyle , disabledStyle]}>
        {iconTag}
        <Text style={[styles.text, textStyle]}>
          {value}
        </Text>
      </View>
    );

    let contentStyle = this.getContainerStyle(size);
    return (
      <TouchableOpacity
        disabled = {this.props.disabled }
        accessibilityTraits="button"
        onPress={ this.props.onPress }
        activeOpacity={0.8}
        style={[contentStyle,this.props.style]}>
        {content}
      </TouchableOpacity>
    );
  }
}

const HEIGHT_SM = 42;
const HEIGHT = 46;
const HEIGHT_LG = 50;

var styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
  containerSM: {
    height: HEIGHT_SM,
  },
  containerLG: {
    height: HEIGHT_LG,
  },
  button: {
    marginRight:10,
    marginBottom:10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonDisabled:{
    opacity:0.5
  },
  primaryButton: {
    backgroundColor: COLORS.PRIMARY
  },
  secondaryButton:{
    backgroundColor: COLORS.SECONDARY
  },
  icon: {
    marginRight:4,
    width: 14,
    height: 14,
  },
  text:{
    letterSpacing: 1,
    fontSize: 14,
  },
  primaryText: {
    color: TEXT_COLORS.PRIMARY
  },
  secondaryText: {
    color: TEXT_COLORS.SECONDARY
  }
});
