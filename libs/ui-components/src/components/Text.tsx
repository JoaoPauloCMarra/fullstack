import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';

interface Props {
  testID?: string;
  fontSize?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Text: React.FC<Props> = ({ testID, children, fontSize = 16, color = '#000', textAlign = 'left' }) => {
  const style: TextStyle = {
    fontSize,
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
