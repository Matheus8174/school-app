import React from 'react';

import { colorScheme, useColorScheme } from 'nativewind';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '@/core/storage';

const SELECTED_THEME = 'SELECTED_THEME';

export type ColorSchemeType = 'light' | 'dark' | 'system';

/**
 * this hooks should only be used while selecting the theme
 * This hooks will return the selected theme which is stored in MMKV
 * selectedTheme should be one of the following values 'light', 'dark' or 'system'
 * don't use this hooks if you want to use it to style your component based on the theme use useColorScheme from nativewind instead
 *
 */
export const useSelectedTheme = () => {
  const { setColorScheme } = useColorScheme();

  const [theme, _setTheme] = useMMKVString(SELECTED_THEME, storage);

  const setSelectedTheme = React.useCallback(
    (t: ColorSchemeType) => {
      setColorScheme(t);
      _setTheme(t);
    },
    [setColorScheme, _setTheme]
  );

  const selectedTheme = (theme ?? 'system') as ColorSchemeType;

  return { selectedTheme, setSelectedTheme } as const;
};

export const loadSelectedTheme = () => {
  const theme = storage.getString(SELECTED_THEME);

  if (theme) colorScheme.set(theme as ColorSchemeType);
};
