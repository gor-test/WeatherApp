import React, { useEffect } from 'react';
import {
  ActivityIndicator,
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

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="#000000"
        />
      </View>
    );
  }

  const locationSection = (isPermissionDenied)
    ? (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Weather on current location</Text>
        <Text style={styles.sectionDescription}>
          Please enable location data for the app on your phone settings
        </Text>
      </View>
    )
    : (<Button title="Use Current Location" onPress={() => requestLocation()} />);

  if (locationData) {
    return (<WeatherView />);
  }

  return (
    <View style={styles.sectionContainer}>
      {locationSection}
      <CitySelector />
    </View>
  );
};

export default LocationSelectorView;
