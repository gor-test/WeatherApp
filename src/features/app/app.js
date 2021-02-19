import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { LocationSelector } from '../location-selector';

const store = configureStore();

const App = () => (
  <>
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <LocationSelector />
      </SafeAreaView>
    </Provider>
  </>
);

export default App;
