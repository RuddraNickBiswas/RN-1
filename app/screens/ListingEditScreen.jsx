import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from '../components/Screen'
import {
    AppForm,
    AppFromField,
    AppFormPicker, 
    SubmitButton
}from '../components/forms'
const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
  });

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ];

const ListingEditScreen = () =>{
    return(
        <Screen style={styles.container}>
         <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        >
         <AppFromField maxLength={255} name="title" placeholder="Title" />
        <AppFromField 
        keyboardType="numeric"
        maxLength={8}
        name="price"
        placeholder="Price"
        />
        <AppFormPicker items={categories} name="category" placeholder="Category" />
        <AppFromField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
        </AppForm>
        </Screen>

    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });

  export default ListingEditScreen