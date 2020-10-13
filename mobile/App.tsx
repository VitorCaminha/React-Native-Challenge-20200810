import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Root } from "native-base";

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Root>
      <StatusBar style="auto" />
      <Routes />
    </Root>
  );
}
