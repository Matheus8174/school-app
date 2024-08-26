import { Stack } from 'expo-router';

function Layout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="second" />

      <Stack.Screen name="third" />
    </Stack>
  );
}

export default Layout;
