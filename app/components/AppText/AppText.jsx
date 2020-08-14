import React from "react";
import { Text } from "react-native";

import stylesCnf from '../../config/stylesCnf'
const AppText = ({children , style}) => {
  return( 
      
  <Text style ={[stylesCnf.text , style]}>{children}</Text>
  );
};

export default AppText;

