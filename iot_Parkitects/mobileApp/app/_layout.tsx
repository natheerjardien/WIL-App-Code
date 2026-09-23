import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AccessibilityProvider, useAccessibility } from '../context/accessibilityContext';

function RootLayoutNav() {
  const { colorMode } = useAccessibility();

  return (
    <ThemeProvider value={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AccessibilityProvider>
      <RootLayoutNav />
    </AccessibilityProvider>
  );
}