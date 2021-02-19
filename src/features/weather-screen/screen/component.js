import React, { useEffect } from 'react';
import {
  ActivityIndicator, ScrollView, View,
} from 'react-native';

import { styles } from '../../../components/current-weather/styles';
import { CurrentWeatherViewMain, CurrentWeatherViewExt } from '../../../components/current-weather';
import { HourlyView } from '../hourly-forecast';
import { DailyView } from '../daily-forecast';

const WeatherView = (props) => {
  const {
    loadWeather,
    current,
    isLoading,
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
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.body}>
        <CurrentWeatherViewMain currentWeatherData={current} />
        <HourlyView />
        <DailyView />
        <CurrentWeatherViewExt currentWeatherData={current} />
      </View>
    </ScrollView>

  );
};

export default WeatherView;
