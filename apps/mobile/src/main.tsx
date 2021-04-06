import React from 'react';
import { AppRegistry } from 'react-native';
import { Constants, ApolloWrapper } from '@nx-fullstack/ui-components';

import App from './App';

const Main = () => (
  <ApolloWrapper uri={Constants.API_URL}>
    <App />
  </ApolloWrapper>
);

AppRegistry.registerComponent('main', () => Main);
