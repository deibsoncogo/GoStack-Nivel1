/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src'; //INFORMA A LOCALIZACAO DO ARQUIVO MAIN
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
