import React from "react";
import { View , StyleSheet, Image, TouchableHighlight } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'; 

import AppText from "./AppText";
import colors from '../config/color'
const ListItem = ({title , subTitle, image , onPress ,renderRightActions , IconComponent}) => {
  return( 
      <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
      underlayColor= {colors.light}
      onPress= {onPress}
      >
      <View style ={styles.container}>
          {IconComponent}
          { image && <Image style ={styles.image} source={image} />}
        <View style ={styles.detailsContainer}>
            <AppText style ={styles.title} numberOfLines={1}>{title}</AppText>
        {subTitle &&<AppText style ={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
        </View>
        <MaterialCommunityIcons name ='chevron-right'  size ={25} />
      </View>
      </TouchableHighlight>
      </Swipeable>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection :"row",
        padding : 15,
        backgroundColor: colors.white,
        alignItems:"center",
    },
    image: {
        width : 70,
        height :70,
        borderRadius:35,
    },
    title :{
        fontWeight: "500",

    },
    subTitle :{
        color: colors.medium,
    },
    detailsContainer: {
        marginLeft : 10,
        justifyContent: "center",
        flex:1,
    }
})


export default ListItem;


