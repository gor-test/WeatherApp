import React, { useEffect } from 'react';
import {
  Button, Text, View,
} from 'react-native';

import { styles } from '../../../components/current-weather/styles';
import { WeatherView } from '../../weather-screen';
import { CitySelector } from '../city-selector';

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
    <View style={styles.sectionContainer}>
      <Button title="Use Current Location" onPress={() => requestLocation()} />
      <CitySelector />
    </View>
  );
};

export default LocationSelectorView;
