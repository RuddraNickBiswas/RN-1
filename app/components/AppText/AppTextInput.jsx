import React from "react";
import { View, TextInput , StyleSheet ,Platform} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import stylesCnf from '../../config/stylesCnf'
const AppTextInput = ({icon, ...otherProps}) => {
  return( 
      
      <View style ={styles.container}>
        { icon && <MaterialCommunityIcons name={icon} size ={20}  color={stylesCnf.colors.medium} style ={styles.icon} />}
          <TextInput 
          placeholderTextColor={stylesCnf.colors.medium}
          style ={stylesCnf.text} {...otherProps} /> 
      </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: stylesCnf.colors.light,
        borderRadius:25,
        flexDirection:'row',
        width: "100%",
        padding: 15,
        marginVertical :10,
    },

    icon :{
        marginRight :10,
    }
})

export default AppTextInput;
