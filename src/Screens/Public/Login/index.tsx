import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CustomTextInput } from '../../../Components';

const Login = (): JSX.Element => {
  const onTextChange = (str: string) => {
    console.log(str, 'str is');
  };
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Login</Text>
      <CustomTextInput onUpdate={onTextChange} leftIcon placeholder="Write your name" />
    </View>
  );
};

export default Login;
