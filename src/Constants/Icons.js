import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import CAMERA from '../Assets/Svgs/Camera.svg'

const iconStyle = (
  width = 0,
  height = 0,
  color = 'black',
  borderColor = 'none',
) => ({
  width: RFValue(width),
  height: RFValue(height),
  fill: color,
  stroke: borderColor,
})

export const ICONS = {
  CAMERA: (...params) => <CAMERA {...iconStyle(...params)} />,
}
