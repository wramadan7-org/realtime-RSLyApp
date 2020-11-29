import React from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import Main from './src/screens/Main';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
