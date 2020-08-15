import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppText/AppPicker";
import  ErrorMessage  from "./ErrorMessage";

const AppFormPicker = ({items , name, placeholder}) =>{

    const {errors, setFieldValue , touched , values} = useFormikContext()

    return (
        <>
    <AppPicker
    items={items}
    onSelectItem ={item => setFieldValue(name, item)}
    placeholder ={placeholder}
    selectedItem={values[name]}
    />
    <ErrorMessage error={errors[name]} visible={touched} />
        </>
    )
}

export default AppFormPicker


