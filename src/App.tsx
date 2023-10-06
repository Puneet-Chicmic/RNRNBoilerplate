import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './Store';
import { TextStyle, TextInput, Text } from 'react-native';
import RootNavigator from './Navigators/RootNavigator';

interface ExtendedText extends Text {
  defaultProps: {
    allowFontScaling: boolean;
    style?: TextStyle;
  };
}

interface ExtendedTextInput extends TextInput {
  defaultProps: {
    allowFontScaling: boolean;
  };
}

const App = () => {
  (Text as unknown as ExtendedText).defaultProps = { allowFontScaling: false };
  (TextInput as unknown as ExtendedTextInput).defaultProps = { allowFontScaling: false };

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
