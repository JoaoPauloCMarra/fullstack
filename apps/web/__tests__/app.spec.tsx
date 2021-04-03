import React from 'react';
import 'react-native-web';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

import App from '../src/app/app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MockedProvider>,
    );

    expect(baseElement).toBeTruthy();
  });
});
