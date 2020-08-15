import React from "react";
import {   StyleSheet, Image } from "react-native";

import * as Yup from 'yup'
import Screen from '../components/Screen'

import {AppForm,AppFromField,SubmitButton} from '../components/forms/index'



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(valus) => console.log(valus)}
        validationSchema={validationSchema}
      >
        <AppFromField
          placeholder="email"
          icon="email"
          autoCurrect={false}
          keybordType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
          name="email"
        />

        <AppFromField
          autoCapitalize="none"
          autoCurrect={false}
          icon="lock"
          placeholder="Password "
          textContentType="password"
          secureTextEntry
          name="password"
        />

        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
   container :{
       padding:10,
   },
    logo:{
        height :80,
        width :80,
        alignSelf: "center",
       marginTop :50,
       marginBottom: 50, 
    }
})

export default LoginScreen;
