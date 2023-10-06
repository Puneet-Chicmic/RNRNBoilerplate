import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { RFValue } from 'react-native-responsive-fontsize';

export const FONT_FAMILY = {
  REGULAR: 'DMSans-Regular',
  MEDIUM: 'DMSans-Medium',
  SEMI_BOLD: 'DMSans-SemiBold',
  BOLD: 'DMSans-Bold',
  EXTRA_BOLD: 'DMSans-ExtraBold'
}


export const COLORS = {
    PRIMARY: {
      PINK: "#F3516D",
      YELLOW: "#FFC200",
    },
    SECONDARY: {
      BLUE: "#2886DC",
      GREEN: "#2ABE77",
      RED: "#e23b3b",
      YELLOW: "#F5A200",
    },
    TERTIARY: {
      BLUE: "#00A5BA",
      GREEN: "#EAF9F1",
      LIGHT_BLUE: "#E4FCFF",
      PINK: "#FFF1F3",
      YELLOW: "#FFF4D8",
    },
  };

  const HEADER_CONST = DeviceInfo.isTablet() ? RFValue(11) : RFValue(13)
  export const SIZES = {
    icon: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13),
    spacing: DeviceInfo.isTablet() ? RFValue(7) : RFValue(8),
    rounding: 5,
    rounding2: 7,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    
    font11: DeviceInfo.isTablet() ? RFValue(10) : RFValue(11),
    font13: DeviceInfo.isTablet() ? RFValue(12) : RFValue(13),
    font14: DeviceInfo.isTablet() ? RFValue(13) : RFValue(14),
    font15: DeviceInfo.isTablet() ? RFValue(13) : RFValue(15),
    font17: DeviceInfo.isTablet() ? RFValue(16) : RFValue(17),
    font18: DeviceInfo.isTablet() ? RFValue(17) : RFValue(18),
    font24: DeviceInfo.isTablet() ? RFValue(23) : RFValue(24),
    
    fontH1: RFValue(HEADER_CONST * 2),
    fontH2: RFValue(HEADER_CONST * 1.8),
    fontH3: RFValue(HEADER_CONST * 1.6),
    fontH4: RFValue(HEADER_CONST * 1.4),
    fontH5: RFValue(HEADER_CONST * 1.2),
    fontH6: RFValue(HEADER_CONST * 1.0),
  
  
  };
  