import React from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { WeatherView } from '../weather-screen';

const store = configureStore();

const App = () => (
  <>
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <WeatherView />
      </SafeAreaView>
    </Provider>
  </>
);

export default App;
