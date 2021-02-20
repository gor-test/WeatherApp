import React, { useEffect } from 'react';
import {
  ActivityIndicator, ScrollView, TouchableOpacity, View, Text,
} from 'react-native';

import { styles } from './styles';
import { CurrentWeatherViewMain, CurrentWeatherViewExt } from '../../../components/current-weather';
import { HourlyView } from '../hourly-forecast';
import { DailyView } from '../daily-forecast';

const WeatherView = (props) => {
  const {
    loadWeather,
    current,
    isLoading,
    resetLocation,
    cityName,
  } = props;
  useEffect(() => {
    if (loadWeather) {
      loadWeather();
    }
  }, []);
  if (isLoading || !current) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CurrentWeatherViewMain currentWeatherData={current} cityName={cityName} />
          <HourlyView />
          <DailyView />
          <CurrentWeatherViewExt currentWeatherData={current} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.flyoutButton}
        onPress={() => resetLocation()}
      >
        <Text style={styles.flyoutButtonText}>≡</Text>
      </TouchableOpacity>
    </>

  );
};

export default WeatherView;
