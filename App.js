import React, {useEffect, useState} from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker  from 'expo-image-picker'
import Screen from "./app/components/Screen";
import * as Permissions from 'expo-permissions'
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/lists/ImageInputList";
export default function App() {

 
 return( 
   <ListingEditScreen />
 )
}
