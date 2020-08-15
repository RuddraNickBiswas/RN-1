import React from "react";
import { Text } from "react-native";

import stylesCnf from '../../config/stylesCnf'
const AppText = ({children , style, ...otherProps}) => {
  return( 
      
  <Text style ={[stylesCnf.text , style]} {...otherProps} >{children}</Text>
  );
};

export default AppText;

