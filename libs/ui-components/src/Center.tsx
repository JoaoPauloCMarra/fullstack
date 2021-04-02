import React from 'react';
import { View, ViewStyle } from 'react-native';

interface Props {
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
}

const Center: React.FC<Props> = ({ children, width = '100%', height = '100%', backgroundColor = '#fff' }) => {
  const style: ViewStyle = {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  };
  return <View style={style}>{children}</View>;
};

export default Center;
