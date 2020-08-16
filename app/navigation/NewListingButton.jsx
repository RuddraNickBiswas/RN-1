import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import { color } from 'react-native-reanimated'
import {MaterialCommunityIcons} from '@expo/vector-icons'
const NewListingButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress ={onPress}>
        <View style = {styles.container}>
            <MaterialCommunityIcons name = 'plus-circle' color ={colors.white} size={40} />
        </View>
        </TouchableOpacity>
          
    )
}

export default NewListingButton

const styles = StyleSheet.create({
    container:{
        backgroundColor : colors.primary,
        height :80,
        width:80,
        bottom :20,
        borderRadius:40,
        borderColor: colors.white,
        borderWidth :10,
        alignItems: "center",
        justifyContent :"center",

    }
})
