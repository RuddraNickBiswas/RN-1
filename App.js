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
const categories = [
  {
    label: 'Furiture', value:1,
  },
  {
    label: 'Clothing', value:2,
  },
  {
    label: 'Camera', value:3,
  },

]
export default function App() {
      const [category , setCategory] = useState(categories[2])
     
  return (
    <Screen>
    <AppPicker
    selectedItem ={category}
    onSelectItem ={item => setCategory(item)}
    items={categories} icon ="apps" placeholder ="Category"/>
    <AppTextInput icon ="email" placeholder ="Email"/>
    </Screen> 
   
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