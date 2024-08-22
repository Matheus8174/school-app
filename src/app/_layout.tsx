import '@/global.css';

import { Stack } from 'expo-router';
import * as ExpoSplashScreen from 'expo-splash-screen';

import { useThemeConfig } from '@/hooks/use-theme-config';
import { ThemeProvider } from '@react-navigation/native';

import { loadSelectedTheme } from '@/hooks/use-selected-theme';
import SplashScreen from './splash-screen';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
};

loadSelectedTheme();

ExpoSplashScreen.preventAutoHideAsync();

function RootLayout() {
  const theme = useThemeConfig();

  return (
    <SplashScreen>
      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="(welcome)" />
        </Stack>
      </ThemeProvider>
    </SplashScreen>
  );
}

export default RootLayout;
