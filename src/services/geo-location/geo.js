import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';

const locationPermission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;

const retrievePosition = () => new Promise(
  (resolve, reject) => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    });
    Geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      },
      { enableHighAccuracy: true },
    );
  },
);

export const requestPosition = async () => {
  if (Platform.OS === 'android') {
    const permissionGranted = await PermissionsAndroid.check(locationPermission);
    if (!permissionGranted) {
      const requestGranted = await PermissionsAndroid.request(locationPermission);
      if (!requestGranted) return 'Location permission denied';
    }
  }
  return retrievePosition();
};

export const watchPosition = () => new Promise(
  (resolve) => {
    // watching for user to enable location services
    const watchID = Geolocation.watchPosition((pos) => {
      resolve(pos);
      Geolocation.clearWatch(watchID);
    });
  },
);
