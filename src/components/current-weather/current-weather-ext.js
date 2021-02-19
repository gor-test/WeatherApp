import React from 'react';
import {
  Text, View,
} from 'react-native';

import moment from 'moment';

import { styles } from './styles';

export const CurrentWeatherViewExt = (props) => {
  const { currentWeatherData } = props;
  if (!currentWeatherData) return null;
  const {
    sunrise, sunset,
    pressure, humidity,
    wind_speed: windSpeed,
    visibility, uvi,
  } = currentWeatherData;

  const sunriseString = moment.unix(sunrise).format('hh:mm A');
  const sunsetString = moment.unix(sunset).format('hh:mm A');

  return (
    <View style={[styles.sectionContainer, {
      borderTopWidth: 0.5,
      borderColor: 'lightgrey',
    }]}
    >
      <RowRenderer
        leftTitle="Wind"
        leftValue={`${(windSpeed * 3.6).toFixed(2)} km / h`}
      />
      <RowRenderer
        leftTitle="Sunrise"
        leftValue={sunriseString}
        rightTitle="Sunset"
        rightValue={sunsetString}
      />
      <RowRenderer
        leftTitle="Humidity"
        leftValue={`${humidity} %`}
        rightTitle="Pressure"
        rightValue={`${pressure} hPa`}
      />
      <RowRenderer
        leftTitle="Visibility"
        leftValue={`${visibility / 1000} km`}
        rightTitle="UV Index"
        rightValue={uvi}
      />
    </View>

  );
};

const RowRenderer = ({
  leftTitle, leftValue, rightTitle, rightValue,
}) => (
  <View style={[styles.sectionContainerVertical, { paddingTop: 10 }]}>
    <View style={styles.sectionLeft}>
      <Text style={styles.sectionDescription}>{leftTitle}</Text>
      <Text style={styles.sectionDescription}>{leftValue}</Text>
    </View>
    <View style={styles.sectionRight}>
      <Text style={styles.sectionDescription}>{rightTitle}</Text>
      <Text style={styles.sectionDescription}>{rightValue}</Text>
    </View>
  </View>
);
