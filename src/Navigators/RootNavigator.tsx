import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

const RootNavigator = () => {
  const token = useSelector((state: RootState) => state.common.token);

  return (
    <SafeAreaView style={styles.parent}>
      <NavigationContainer ref={navigationRef} fallback={<Text>Loading...</Text>}>
        {!!token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
