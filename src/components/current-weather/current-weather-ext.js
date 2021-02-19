import React from 'react';
import {
  Image, Text, View,
} from 'react-native';

import { BASE_IMG_URL } from '../../services/utils/api/constants';
import { styles } from './styles';

export const CurrentWeatherViewExt = (props) => {
  const { currentWeatherData } = props;
  if (!currentWeatherData) return null;
  const {
    sunrise, sunset,
    pressure, humidity,
    wind_speed, wind_deg,
  } = currentWeatherData;
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionContainerVertical}>
        <View style={styles.sectionLeft}>
          <Text style={styles.sectionDescription}>{}</Text>
        </View>
        <View style={styles.sectionRight}>
          <Text style={styles.sectionDescription}>{}</Text>
        </View>
      </View>
    </View>
  );
};
