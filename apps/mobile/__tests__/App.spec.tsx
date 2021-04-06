import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

import App from '../src/App';

describe('App', () => {
  it('should render successfully', () => {
    const tree = renderer.create(
      <MockedProvider mocks={[]} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
