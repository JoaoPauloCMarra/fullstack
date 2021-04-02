import React from 'react';
import { View, ViewStyle } from 'react-native';

interface Props {
  testID?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
}

const Center: React.FC<Props> = ({ testID, children, width = '100%', height = '100%', backgroundColor = '#fff' }) => {
  const style: ViewStyle = {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  };
  return (
    <View style={style} testID={testID}>
      {children}
    </View>
  );
};

export default Center;
