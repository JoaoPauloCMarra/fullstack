import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Constants, ApolloWrapper } from '@nx-fullstack/ui-components';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper uri={Constants.API_URL}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
