import {
  type Theme,
  DefaultTheme,
  DarkTheme as _DarkTheme
} from '@react-navigation/native';

import { useColorScheme } from 'nativewind';

import colors from '@/styles/colors';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors['light-blue']['100'],
    background: colors.black[100],
    text: colors.white,
    card: colors.black[50],
    border: colors.black[200]
  }
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: colors.grey,
    text: colors.black['200'],
    background: colors.white
  }
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'dark') return DarkTheme;

  return LightTheme;
}
