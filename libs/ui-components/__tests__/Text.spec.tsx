import 'react-native-web';
import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';

import { Text } from '@nx-fullstack/ui-components';

test('renders correctly', () => {
  const text = 'It Works!';
  const { root } = renderer.create(
    <View>
      <Text>{text}</Text>
    </View>,
  );
  const { props } = root.findByType(Text);
  expect(props.children).toBe(text);
});
