import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from 'expo-image-picker'



const ImageInput = ({ imageUri, onChangeImage }) => {

    const requestPermisson = async() =>{
        // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
        const {granted} = await ImagePicker.requestCameraRollPermissionsAsync()
        if (!granted)
        alert("You need to enable permisson to access the libery")
      }
    
      useEffect(() =>{
        requestPermisson()
      },[])

  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete' , 'Are You Sure About thes image', [
        {text: "Yes" , onPress:() => onChangeImage(null) },
        {text : 'no'},
    ])
  };
  
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality:0.5
      }); 

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
