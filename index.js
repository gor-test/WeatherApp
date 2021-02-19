import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/features/app/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
