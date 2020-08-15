import React from "react";
import AppTextInput from "../AppText/AppTextInput";
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from 'formik'
const AppFromField = ({name, ...otherProps}) => {
    const {setFieldTouched, handleChange, errors , touched} = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        // placeholder="email"
        {...otherProps}
        // textContentType="emailAddress"
        // icon="email"
        // autoCurrect={false}
        // keybordType="email-address"
        // autoCapitalize="none"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFromField;
