import React, { Children } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
const W = Dimensions.get('window').width
const H = Dimensions.get('window').height
const CustomButton = ({
  buttonLabel,
  buttonStyle,
  labelStyle,
  onPress,
  leftChild,
  rightChild,
  rightChildStyle,
  leftChildStyle,
  needDisabled,
  disabled = false,
  deleteAccount,
  icon,
  iconStyle,
  children
}) => {
  return (
    
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, buttonStyle]}
    >
      {leftChild ? <View style={[leftChildStyle]}>{leftChild}</View> : null}
      {buttonLabel ? (
        <View>
          <Text style={[styles.textStyle, labelStyle]}>{buttonLabel}</Text>
        </View>
      ) : null}
      {rightChild ? (
        <View style={[{ alignItems: 'center' }, rightChildStyle]}>
          {rightChild}
        </View>
      ) : null}
      {icon ? (
        <View style={[iconStyle, { alignSelf: 'center' }]}>{icon}</View>
      ) : null}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: W * 0.85,
    height: W * 0.14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:"#ffffff"
  },
  textStyle: {
    fontSize: RFValue(20),
    opacity: 1,
    fontWeight:"600"
  },
})

export default CustomButton