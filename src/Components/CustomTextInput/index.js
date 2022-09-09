import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ActivityIndicator
  } from 'react-native'

  import { ICONS } from '@/Constants/Icons'
  import { RFValue } from 'react-native-responsive-fontsize'
  import React from 'react'
  
  const W = Dimensions.get('window').width
  const H = Dimensions.get('window').height
  const CustomTextInput = ({
    maxLength,
    searchIcon,
    InputStyle,
    textPlaceholder,
    values,
    test,
    desc,
    isSearchLoading,
    numberOfLines = 1,
    onChange = data => {
      data
    },
    textInputStyle,
    multiline,
    textAlignVertical,
    qrCode,
    onPressQRCode,
  }) => {
    console.log(textPlaceholder, values, test, 'value')
    return (
      <View
        style={[
          {
            // width: '100%',
  
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 12,
            justifyContent: 'flex-start',
          },
          InputStyle,
        ]}
      >
        <View
          style={{
            width: '88%',
            display: 'flex',
            flexDirection: Platform.OS === 'ios' && desc ? '' : 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          {searchIcon && ( isSearchLoading?
            <View         
            >
             <ActivityIndicator size={"small"} color={"#A59575"} />
            </View>
          :
  
            <View
            >
              {/* <BrownSearch height={16} width={16} /> */}
              {ICONS.CAMERA(20,20)}
            </View>
          )}
  
          <TextInput
            style={[
              {
                // flex: 1,
                width: '100%',
                padding: 0,
                paddingTop: RFValue(10),
                paddingBottom: RFValue(10),
                paddingLeft: !searchIcon ? RFValue(5) : RFValue(10),
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
              textInputStyle,
            ]}
            placeholder={textPlaceholder}
            placeholderTextColor={'#212529'}
            onChangeText={e => onChange(e)}
            multiline={multiline}
            value={values}
            numberOfLines={numberOfLines}
            textAlignVertical={textAlignVertical}
            maxLength={maxLength}
          />
        </View>
      </View>
    )
  }
  
  export default React.memo(CustomTextInput)