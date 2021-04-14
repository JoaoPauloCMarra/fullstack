import { ViewStyle } from 'react-native';
import Color from 'color';

export const darkenHex = (color: string, amount: number) => Color(color).darken(amount).string();
export const lightenHex = (color: string, amount: number) => Color(color).lighten(amount).string();

const palette = {
  primary: '#615fb1',
  primaryLight: '#6883BA',
  light: '#F9F9F9',
  dark: '#121212',
  secondary: '#E072A4',
  tertiary: '#B0E298',
};

const layout = {
  bgColor: 'rgb(32, 32, 32)',
};

const buttonTextColor = {
  default: palette.light,
  outline: {
    primary: palette.primary,
    secondary: palette.secondary,
  },
};
const linkTextColor = {
  primary: palette.primary,
  secondary: palette.secondary,
};
const typography = {
  textSize: 16,
  textColor: palette.light,
  buttonTextColor,
  linkTextColor,
  buttonTextSize: 14,
  linkTextSize: 14,
  buttonTextWeight: 'bold',
  linkTextWeight: 'bold',
};

const primaryButton: { default?: ViewStyle; outline?: ViewStyle } = {};
const secondaryButton: { default?: ViewStyle; outline?: ViewStyle } = {};
primaryButton.default = {
  backgroundColor: palette.primary,
  borderWidth: 0,
  borderRadius: 8,
  paddingHorizontal: 20,
  paddingVertical: 10,
};
primaryButton.outline = {
  ...primaryButton.default,
  backgroundColor: 'transparent',
  borderColor: palette.primary,
  borderWidth: 2,
};
secondaryButton.default = {
  ...primaryButton.default,
  backgroundColor: palette.secondary,
};
secondaryButton.outline = {
  ...primaryButton.outline,
  borderColor: palette.secondary,
};

const link = {
  backgroundColor: 'transparent',
  borderWidth: 0,
  borderRadius: 0,
  padding: 10,
};

export default {
  palette,
  ...layout,
  ...typography,
  button: {
    primary: primaryButton,
    secondary: secondaryButton,
    opacityOnPress: 0.8,
    hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
  },
  link,
};
