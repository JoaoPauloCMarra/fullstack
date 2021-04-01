import React from 'react';
import { Text, TextStyle } from 'react-native';

interface Props {
  fontSize?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Title: React.FC<Props> = ({
  children,
  fontSize = 16,
  color = '#000',
  textAlign = 'left',
}) => {
  const style: TextStyle = {
    fontSize,
    color,
    textAlign,
  };
  return <Text style={style}>{children}</Text>;
};

export default Title;
