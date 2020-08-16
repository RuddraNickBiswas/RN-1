import React, {useEffect, useState} from "react";
import {Text, Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import Screen from "./app/components/Screen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FromImagePicker from "./app/components/forms/FromImagePicker";
import {MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from "./app/navigation/authNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {

  
 return( 
   <NavigationContainer theme={navigationTheme}>
  <AppNavigator/>
   </NavigationContainer>
 )
}
