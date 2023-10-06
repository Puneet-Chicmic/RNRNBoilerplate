import {
  Dimensions,
  TextInput,
  View,
  TextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import React from 'react';
import { ICONS } from '../../Constants/Icons';
import { styles } from './styles';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

export interface CustomInputProps extends TextInputProps {
  value?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onUpdate: (x: string) => void;
}

const CustomTextInput = ({
  value,
  error,
  style,
  leftIcon,
  rightIcon,
  containerStyle,
  textInputStyle,
  onUpdate = () => {},
  ...props
}: CustomInputProps) => {
  return (
    <View style={[styles.parent, containerStyle]}>
      <View style={styles.ctr}>
        {leftIcon && <View>{ICONS.CAMERA(20, 20)}</View>}

        <TextInput
          style={[styles.textStyleCtr, textInputStyle]}
          placeholder={props.placeholder}
          placeholderTextColor={'#21252990'}
          onChangeText={onUpdate}
          multiline={props.multiline}
          value={value}
          numberOfLines={props.numberOfLines}
          textAlignVertical={props.textAlignVertical}
          maxLength={props.maxLength}
        />
      </View>
    </View>
  );
};

export default React.memo(CustomTextInput);
