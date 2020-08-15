import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Switch } from 'react-native';
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
import AppTextInput from './app/components/AppText/AppTextInput';
import AppPicker from './app/components/AppText/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';



export default function App() {
     
     
  return (
   <ListingEditScreen/>
    
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