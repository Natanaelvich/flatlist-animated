import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// eslint-disable-next-line import/no-mutable-exports
let reactotron = null;

const { scriptURL } = NativeModules.SourceCode;
const address = scriptURL.split('://')[1].split('/')[0];
const hostname = address.split(':')[0];

reactotron = Reactotron.configure({
  name: 'react-native',
  host: hostname,
  port: 9090,
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative({
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron.log;

export { reactotron };
