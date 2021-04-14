import React, { useMemo, useState } from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';

import theme from '../theme';
import Text from './Text';

interface Props {
  type?: 'button' | 'link';
  variant?: 'primary' | 'secondary';
  buttonVariant?: 'default' | 'outline';
  testID?: string;
  onPress?: null | ((event: GestureResponderEvent) => void);
}

const Button: React.FC<Props> = ({
  children,
  type = 'button',
  variant = 'primary',
  buttonVariant = 'default',
  onPress,
  testID,
}) => {
  const [pressing, setPressing] = useState(false);
  const style = useMemo(() => {
    if (!type || !variant) return;

    const typeStyle = theme[type] || {};
    let variantStyle = {
      opacity: pressing ? 0.8 : 1,
    };
    let textStyle = '';
    let fontSize = 0;
    let fontWeight = 'normal';

    if (type === 'button') {
      fontSize = theme.buttonTextSize;
      fontWeight = theme.buttonTextWeight;
      variantStyle = typeStyle[variant] || {};
      textStyle = theme.buttonTextColor.default;

      variantStyle = variantStyle[buttonVariant] || {};
      if (buttonVariant === 'outline') {
        textStyle = theme.buttonTextColor.outline[variant] || '#000';
      }
    } else {
      fontSize = theme.linkTextSize;
      fontWeight = theme.linkTextWeight;
      variantStyle = { ...variantStyle, ...typeStyle };
      textStyle = theme.linkTextColor[variant] || '';
    }

    return { button: variantStyle, text: textStyle, fontSize, fontWeight: fontWeight as 'normal' | 'bold' };
  }, [type, variant, buttonVariant, pressing]);

  return (
    <TouchableOpacity
      hitSlop={theme.button.hitSlop}
      activeOpacity={theme.button.opacityOnPress}
      style={style.button}
      testID={testID}
      onPress={onPress}>
      {typeof children === 'string' ? (
        <Text color={style.text} fontSize={style.fontSize} fontWeight={style.fontWeight}>
          {children}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;
