import React from "react";
import { View , StyleSheet ,TouchableWithoutFeedback} from "react-native";
import colors from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons'



const ListItemDeleteAction = ({onPress}) => {
  return( 
    <TouchableWithoutFeedback onPress={onPress}>
      <View style ={styles.container}>
            <MaterialCommunityIcons  name="trash-can" size={35} color={colors.white} />
      </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container :{
    backgroundColor: colors.danger,
    justifyContent:"center",
    alignItems: "center",
    width: 70,

    }
})

export default ListItemDeleteAction;
