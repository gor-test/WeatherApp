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
      title: 'asd',
      data: cities.data,
    },
    {
      title: 'Saved Cities',
      data: savedCities,
    },
  ];
  // console.log({ listData });
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
      <FlatList
        data={cities.data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.lat}${item.lon}`}
        // renderSectionHeader={({ section: { title } }) => (
        //   <Text>{title}</Text>
        // )}
      />
    </View>
  );
};

export default CitySelectorView;
