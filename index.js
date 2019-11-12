/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import ViewComponent from './src/View';
// import ImageComponent from './src/Image';
// import TextComponent from './src/Text';
// import TextInputComponent from './src/TextInput';
import ScrollViewComponent from './src/ScrollView';
import ButtonComponent from './src/Button';
// import PickerComponent from './src/Picker';
// import FlatListDemo from './src/FlatList';
// import SectionListComponent from './src/SectionList';
import ModalComponent from './src/Modal';
// import ProgressBarAndroidContent from './src/ProgressBarAndroid';
import App from './App'
import ReactNativeNavigationComponent from './src/NavigationDemo/NavigationDemo'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReactNativeNavigationComponent);
