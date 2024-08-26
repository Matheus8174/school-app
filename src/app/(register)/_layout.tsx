import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="choose-role" />
      </Stack>
    </SafeAreaView>
  );
}

export default Layout;
