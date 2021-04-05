import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ApolloWrapper } from '@nx-fullstack/ui-components';

import App from './app/App';

const host = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

const Main = () => (
  <ApolloWrapper uri={`http://${host}:5000/graphql`}>
    <App />
  </ApolloWrapper>
);

AppRegistry.registerComponent('main', () => Main);
