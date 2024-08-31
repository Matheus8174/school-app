import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/styles/colors';

function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerTitle: 'voltar',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.black['100'] }
        }}
      >
        <Stack.Screen name="studant" />

        <Stack.Screen name="choose-role" />
      </Stack>
    </SafeAreaView>
  );
}

export default Layout;
