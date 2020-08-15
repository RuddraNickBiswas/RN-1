import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from 'yup'
import Screen from '../components/Screen'

import {
    AppForm ,
    AppFromField,
    SubmitButton,
}from '../components/forms'

const validationSchema = Yup.object().shape({
    name : Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


const RegisterScreen = () => {
  return( 
      <Screen style={styles.container}>
          <AppForm
          initialValues={{name: '' , email: '', password:''}}
          onSubmit ={value => console.log(value)}
          validationSchema ={validationSchema}
          >
              <AppFromField
                autoCurrect={false}
                icon="account"
                name='name'
                placeholder='Name'
              />
            <AppFromField
            autoCapitalize ="none"
            autoCurrect={false}
            icon='email'
            keyboardType="email-address"
            name='email'
            placeholder="Email"
            textContentType ="emailAddress"
            />
            <AppFromField
            autoCapitalize='none'
            autoCurrect={false}
            icon='lock'
            name='password'
            placeholder='password'
            secureTextEntry
            textContentType='password'
            />
              <SubmitButton title="Register"/>
          </AppForm>
      </Screen>

  );
};
const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });
export default RegisterScreen;
