import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloWrapper } from '@nx-fullstack/ui-components';

import App from './app/App';

const Main = () => (
  <ApolloWrapper uri="http://localhost:5000/graphql">
    <App />
  </ApolloWrapper>
);

AppRegistry.registerComponent('main', () => Main);
