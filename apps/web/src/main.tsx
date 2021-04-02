import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloWrapper } from '@nx-fullstack/ui-components';

import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper uri="http://localhost:5000/graphql">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
