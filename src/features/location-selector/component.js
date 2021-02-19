import React, { useEffect } from 'react';
import {
  Text, View,
} from 'react-native';

import { styles } from '../../components/current-weather/styles';
import { WeatherView } from '../weather-screen';

const LocationSelectorView = (props) => {
  const {
    requestLocation,
    isLoading,
    isPermissionDenied,
    locationData,
  } = props;
  useEffect(() => {
    if (requestLocation) {
      requestLocation();
    }
  }, []);

  if (!isLoading && isPermissionDenied) {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Weather on current location</Text>
        <Text style={styles.sectionDescription}>
          Please enable location data for the app on your phone settings
        </Text>
      </View>
    );
  }
  if (locationData) {
    return (<WeatherView />);
  }
  return (
    <View />
  );
};

export default LocationSelectorView;
