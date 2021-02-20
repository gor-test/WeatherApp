import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SectionList,
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { styles } from '../../../components/current-weather/styles';
import { itemStyles, viewStyles } from './styles';

const Item = ({ title }) => (
  <View style={itemStyles.item}>
    <Text style={itemStyles.title}>{title}</Text>
  </View>
);

const CitySelectorView = (props) => {
  const {
    cities,
    savedCities,
    loadCities,
    selectCity,
    loadSavedCities,
  } = props;

  useEffect(() => {
    if (loadSavedCities) {
      loadSavedCities();
    }
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => selectCity(item)}
    >
      <Item title={`${item.name}, ${item.country}`} />
    </TouchableOpacity>

  );
  const listData = [
    {
      title: '',
      data: cities.data,
    },
    {
      title: 'Last Used Cities',
      data: savedCities,
    },
  ];
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>Cities</Text>
      <TextInput
        style={viewStyles.searchBox}
        onChangeText={(text) => {
          loadCities(text);
        }}
      />
      {cities && cities.isLoading && (<ActivityIndicator style={viewStyles.activityIndicator} />)}
      <SectionList
        keyboardShouldPersistTaps="handled"
        sections={listData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.lat}${item.lon}${index}`}
        renderSectionHeader={({ section: { title } }) => (
          <Text>
            {title}
          </Text>
        )}
      />
    </View>
  );
};

export default CitySelectorView;
