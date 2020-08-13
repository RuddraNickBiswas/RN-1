import React from "react";
import { View , StyleSheet} from "react-native";
import colors from '../config/color'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const ListItemDeleteAction = ({onPress}) => {
  return( 
    <TouchableWithoutFeedback style ={styles.container} onPress={onPress}>
      <View  >
            <MaterialCommunityIcons  name="trash-can" size={35} color={colors.white} />
      </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
    container :{
    backgroundColor: colors.denger,
    justifyContent:"center",
    alignItems: "center",
    width: 70,

    }
})

export default ListItemDeleteAction;
