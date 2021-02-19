import Geolocation from '@react-native-community/geolocation';

export const requestPosition = () => new Promise(
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

export const watchPosition = () => new Promise(
  (resolve) => {
    // watching for user to enable location services
    const watchID = Geolocation.watchPosition((pos) => {
      resolve(pos);
      Geolocation.clearWatch(watchID);
    });
  },
);
