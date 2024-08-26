import '@/styles/global.css';

import { Stack, useNavigationContainerRef } from 'expo-router';
import * as ExpoSplashScreen from 'expo-splash-screen';

import { useThemeConfig } from '@/hooks/use-theme-config';
import { ThemeProvider } from '@react-navigation/native';

import { loadSelectedTheme } from '@/hooks/use-selected-theme';
import SplashScreen from './splash-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

export { ErrorBoundary } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)'
// };

loadSelectedTheme();

ExpoSplashScreen.preventAutoHideAsync();

function RootLayout() {
  const theme = useThemeConfig();

  const { top } = useSafeAreaInsets();

  return (
    <SplashScreen>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <ThemeProvider value={theme}>
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="(welcome)" />

            <Stack.Screen name="(register)" options={{ headerShown: false }} />

            <Stack.Screen
              name="login"
              options={{
                animation: 'slide_from_bottom'
              }}
            />
          </Stack>
        </ThemeProvider>
      </View>
    </SplashScreen>
  );
}

export default RootLayout;
