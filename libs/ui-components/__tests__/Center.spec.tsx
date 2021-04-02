import React from 'react';
import 'react-native-web';
import renderer from 'react-test-renderer';

import { Center } from '@nx-fullstack/ui-components';

test('renders correctly', () => {
  const tree = renderer.create(<Center />);
  expect(tree.toJSON()).toMatchSnapshot();
});
