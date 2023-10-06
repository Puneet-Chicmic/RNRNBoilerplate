import { StyleSheet } from 'react-native';
import { COLORS, FONT_FAMILY, SIZES } from '../../../Constants/CommonStyle';

export const styles = StyleSheet.create({
  parent: { flex: 1, backgroundColor: '#ffffff', padding: SIZES.spacing },
  heading: {
    fontSize: SIZES.font13,
    color: COLORS.PRIMARY.PINK,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
});
