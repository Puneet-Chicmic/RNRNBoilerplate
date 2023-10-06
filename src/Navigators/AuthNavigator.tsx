import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION } from '../Constants/Navigation';
import Login from '../Screens/Public/Login';

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATION.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
