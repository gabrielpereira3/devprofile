import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/AuthContext';
import { StatusBar } from 'expo-status-bar';

const App: React.FunctionComponent = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
