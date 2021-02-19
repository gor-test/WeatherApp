import AsyncStorage from '@react-native-community/async-storage';

/* eslint-disable import/no-extraneous-dependencies */
import Tron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
// import sagaPlugin from 'reactotron-redux-saga';

const tron = Tron
  .setAsyncStorageHandler(AsyncStorage)
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  // .use(sagaPlugin())
  .connect(); // let's connect!

tron.clear();

export default tron;
// const sagaMonitor = tron.createSagaMonitor();
// export default sagaMonitor;
