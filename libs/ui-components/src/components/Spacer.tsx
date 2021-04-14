import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

interface Props {
  size?: number;
  flex?: boolean;
  direction?: 'horizontal' | 'vertical';
}

const Spacer: React.FC<Props> = ({ size = 0, flex = false, direction = 'vertical' }) => {
  const style: ViewStyle = useMemo(() => {
    let result = {};
    if (flex) {
      result = { flex: 1 };
    } else if (direction === 'vertical') {
      result = { marginTop: size };
    } else {
      result = { marginLeft: size };
    }
    return result;
  }, [size, flex, direction]);

  return <View style={style} />;
};

export default Spacer;
