import React, { PropsWithChildren } from 'react';

import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

import * as ExpoSplashScreen from 'expo-splash-screen';

function SplashScreen({ children }: PropsWithChildren) {
  // const [loaded, error] = useFonts({
  //   SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  //   ...FontAwesome.font
  // });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // React.useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  React.useEffect(() => {
    // if (loaded) {
    ExpoSplashScreen.hideAsync();
    // }
  }, []);

  // if (!loaded) return null;

  return children;
}

export default SplashScreen;
