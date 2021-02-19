import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@saved_cities';

export const getSavedCities = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
  return [];
};

export const storeSavedCities = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    // saving error
  }
};
