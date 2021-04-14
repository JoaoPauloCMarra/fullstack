import React from 'react';
import { View, ViewStyle } from 'react-native';
import theme from '../theme';

interface Props {
  backgroundColor?: string;
  height?: number | string;
  width?: number | string;
  testID?: string;
}

const Center: React.FC<Props> = ({
  children,
  backgroundColor = theme.bgColor,
  height = '100%',
  width = '100%',
  testID,
}) => {
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
