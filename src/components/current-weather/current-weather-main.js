import React from 'react';
import {
  Image, Text, View,
} from 'react-native';

import { BASE_IMG_URL } from '../../services/utils/api/constants';
import { styles } from './styles';

const t = (strings, tempExp) => `${Math.round(tempExp)} °`;

export const CurrentWeatherViewMain = (props) => {
  const { currentWeatherData, cityName } = props;
  if (!currentWeatherData) return null;
  const {
    temp,
    feels_like: feelsLike,
    weather: [{ main: mainWeather, description, icon }] = [{}],
  } = currentWeatherData;
  const unit = 'C';
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{cityName}</Text>
      <View style={styles.sectionContainerVertical}>
        <View style={styles.sectionLeft}>
          {mainWeather && (<Text style={styles.sectionDescription}>{mainWeather}</Text>)}
          <Text style={styles.sectionTitle}>
            {t`${temp}`}
            {unit}
          </Text>
          <Text style={styles.sectionDescription}>
            Feels like
            {' '}
            {t`${feelsLike}`}
          </Text>
        </View>
        <View style={styles.sectionRight}>
          <Image
            style={{
              width: 66,
              height: 58,
              right: 0,
            }}
            source={{
              uri: `${BASE_IMG_URL}/${icon}@2x.png`,
            }}
          />
          <Text style={styles.sectionDescription}>{description}</Text>
        </View>
      </View>
    </View>
  );
};
