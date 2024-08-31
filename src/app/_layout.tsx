import '@/styles/global.css';

import { Stack } from 'expo-router';
import * as ExpoSplashScreen from 'expo-splash-screen';

import { useThemeConfig } from '@/hooks/use-theme-config';
import { ThemeProvider } from '@react-navigation/native';

import { loadSelectedTheme } from '@/hooks/use-selected-theme';
import SplashScreen from './splash-screen';
import { View } from 'react-native';

import { KeyboardProvider } from 'react-native-keyboard-controller';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export { ErrorBoundary } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)'
// };

loadSelectedTheme();

ExpoSplashScreen.preventAutoHideAsync();

function RootLayout() {
  const theme = useThemeConfig();

  return (
    <SplashScreen>
      <KeyboardProvider>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <ThemeProvider value={theme}>
            <GestureHandlerRootView>
              <Stack
                screenOptions={{
                  statusBarStyle: theme.dark ? 'light' : 'dark',
                  statusBarColor: theme.colors.background,
                  headerShown: false
                }}
              >
                <Stack.Screen
                  name="login"
                  options={{
                    animation: 'slide_from_bottom'
                  }}
                />

                <Stack.Screen name="(welcome)" redirect />

                <Stack.Screen
                  name="register"
                  options={{ headerShown: false }}
                />
              </Stack>
            </GestureHandlerRootView>
          </ThemeProvider>
        </View>
      </KeyboardProvider>
    </SplashScreen>
  );
}

export default RootLayout;
