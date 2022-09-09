import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { CustomButton, CustomTextInput } from '@/Components'

const StartupContainer = () => {
  console.log('NOOOOO')
  return (
    <SafeAreaView
      style={{
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <Text
        style={{
          color: '#000000',
          fontSize: RFValue(20),
          fontWeight:"600"
        }}
      >
        Demo Screen
      </Text>

      <CustomTextInput
          InputStyle={{height:heightPercentageToDP(5),backgroundColor:"white",margin:10,borderWidth:0.5}}
          textPlaceholder="Enter Name.."
          maxLength={20}
          onChange={str => {
          alert("Good!")
          }}
                  />
      <CustomButton
              onPress={()=>alert("Hey, That's the custom button")}
              buttonStyle={{backgroundColor:"blue",width:widthPercentageToDP(70)}}
              labelStyle={{color:"#ffffff"}}
              buttonLabel={'Join'}
            />
    </SafeAreaView>
  )
}

export default StartupContainer
