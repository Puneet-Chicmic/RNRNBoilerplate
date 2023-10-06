import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { ICONS } from '../../Constants/Icons'
import Modal from 'react-native-modal'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomModal = ({
  status,
  heading,
  children,
  boxStyling,
  change,
  backdropPress,
  copyText,
  uniqueCode,
  titleStyling,
  onPressCopy,
  expiryTime,
  crossIconStyle,
  cancelCheck = true,
  checkHeading = true,
}) => {
  return (
    <View>
      <Modal
        isVisible={status}
        onBackdropPress={backdropPress}

        backdropOpacity={0}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#00000001',
          }}
          onPress={change}
        >
          <View
            style={[
              {
                height: RFValue(65),
                // borderBottomWidth: 1.5,
                borderColor: '#00000010',
                alignItems: 'center',
                justifyContent: 'center',
              },
              titleStyling,
            ]}
          >
            {checkHeading && (
              <View style={{ alignItems: 'center', padding: 0 }}>
                <Text
                  style={{
                    fontSize: RFValue(15),
                    fontFamily: 'Poppins-SemiBold',
                    // lineHeight: 18.23,
                    color: '#212529',
                    paddingHorizontal: 10,
                    // marginTop:5
                  }}
                  numberOfLines={1}
                >
                  {heading}
                </Text>
                {copyText && (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        padding: 6,
                        borderRadius: 5,
                        marginTop: 5,
                        borderColor: '#3796F3',
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          fontSize: RFValue(10),
                          fontFamily: 'Poppins-Medium',
                          color: '#212529',
                        }}
                      >
                        {uniqueCode}
                      </Text>
                      <TouchableOpacity
                        style={{ marginHorizontal: 5 }}
                        onPress={onPressCopy}
                      >
                        {ICONS.COPY_ICON(18, 18)}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            )}

            {cancelCheck && (
              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                onPress={change}
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ICONS.CANCELWHITE(12, 12)}
              </TouchableOpacity>
            )}
          </View>
          <View>{children}</View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomModal