import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useDimensions} from "@react-native-community/hooks"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessageScreen';
import Icon from './app/components/Icon'
import Screen from './app/components/Screen'
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingSceen from './app/screens/ListingScreen';
export default function App() {

  console.log(useDimensions())
  return (
    
    <ListingSceen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});




// "assetBundlePatterns": [
//   "**/*"
// ],