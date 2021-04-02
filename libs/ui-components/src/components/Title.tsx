import React from 'react';
import { Text, TextStyle } from 'react-native';

interface Props {
  testID?: string;
  fontSize?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Title: React.FC<Props> = ({ testID, children, fontSize = 16, color = '#000', textAlign = 'left' }) => {
  const style: TextStyle = {
    fontSize,
    color,
    textAlign,
  };
  return (
    <Text style={style} testID={testID}>
      {children}
    </Text>
  );
};

export default Title;
