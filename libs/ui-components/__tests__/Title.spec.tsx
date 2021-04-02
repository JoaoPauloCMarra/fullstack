import 'react-native-web';
import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import { Title } from '@nx-fullstack/ui-components';

test('renders correctly', () => {
  const text = 'It Works!';
  const { root } = renderer.create(
    <View>
      <Title>{text}</Title>
    </View>,
  );
  const { props } = root.findByType(Title);
  expect(props.children).toBe(text);
});
