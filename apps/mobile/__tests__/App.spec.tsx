import 'react-native';
import '@testing-library/jest-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { displayName as name } from '../app.json';
import App from '../src/app/App';

it('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('screen-title')).toHaveTextContent(name);
});
