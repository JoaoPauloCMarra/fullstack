import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

import theme from '../theme';

interface Props {
  testID?: string;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Text: React.FC<Props> = ({
  testID,
  children,
  fontSize = theme.textSize,
  fontWeight,
  color = theme.textColor,
  textAlign = 'left',
}) => {
  const style: TextStyle = {
    fontSize,
    fontWeight,
    color,
    textAlign,
  };

  return (
    <RNText style={style} testID={testID}>
      {children}
    </RNText>
  );
};

export default Text;
