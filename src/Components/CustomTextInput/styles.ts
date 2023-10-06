import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: RFValue(8),
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    paddingHorizontal: RFValue(5),
  },
  ctr: {
    width: '88%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyleCtr: {
    // flex: 1,
    width: '100%',
    padding: 0,
    paddingTop: RFValue(10),
    paddingBottom: RFValue(10),
    paddingLeft: RFValue(10),
    paddingRight: RFValue(18),
    textAlignVertical: 'top',
    height: '100%',
    // maxHeight: 300,
    color: 'black',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 5,
    alignSelf: 'center',
  },
});
