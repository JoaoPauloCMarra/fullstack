import { Platform } from 'react-native';

const USE_LOCAL_SERVER = true;
const REMOTE_API_URL = 'https://my-remote-server.com/graphql';

let host = 'localhost';
if (USE_LOCAL_SERVER && Platform.OS !== 'web') {
  host = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
}

export const API_URL = !USE_LOCAL_SERVER ? REMOTE_API_URL : `http://${host}:5000/graphql`;

export default {
  platform: Platform.OS,
  API_URL,
};
