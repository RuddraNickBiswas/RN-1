import React from "react";
import { View, Image, ImageBackground , StyleSheet ,Text} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
      <ImageBackground 
      blurRadius={10}
      source ={require("../assets/background.jpg")} style ={styles.backgrount} >
        <View style = {styles.logoContainer}>
        <Image style = {styles.logo} source = {require("../assets/logo-red.png")} />
        <Text style = {styles.tagLine} > Sell What You Don't Need</Text>
        </View>
        <View style ={styles.buttonContainer}>
           <AppButton title ="Login" /> 
          <AppButton title = "Register"  color ="secondary"/>
          </View>
      </ImageBackground>
  );
};

export default WelcomeScreen;


const styles = StyleSheet.create({
    backgrount :{
        flex :1,
        justifyContent :"flex-end",
        alignItems : "center",
    },

    buttonContainer : {
        padding : 20,
        width : "100%",
    },
 
    logoContainer : {
        position : "absolute",
        top : 70,
        alignItems : 'center',
    },
    logo:{
        width : 100,
        height : 100,
      
    },
    tagLine :{
        fontSize: 25,
        fontWeight :"600",
        paddingVertical :20,
    }
   

})