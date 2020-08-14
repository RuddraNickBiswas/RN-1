import React from "react";
import { View , StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from '../config/color'
import Icon from '../components/Icon'
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
    {
     title: "My Listing",
     icon:{
        name : "format-list-bulleted",
        backgroundColor : colors.primary,
     }
    },
    {
        title: "My Message",
        icon:{
           name : "email",
           backgroundColor : colors.secondary,
        }
       },

]


const AccountScreen = () => {
  return( 
      
      <Screen style = {styles.screen}>
          <View style ={styles.container}>
          <ListItem 
          title = "Ruddra Nick Biswas"
          subTitle = "biswasruddra100@gmail.com"
          image = {require("../assets/favicon.png")}
          />
        </View>

        <View style ={styles.container}>
            <FlatList 
            data ={menuItems}
            keyExtractor={item => item.title}
            ItemSeparatorComponent= {ListItemSeparator}
            renderItem ={({item}) => 
            <ListItem
            title= {item.title}
            IconComponent={
                <Icon name={item.icon.name} backgroundColor ={item.icon.backgroundColor}/>
            }
            />
        }
            />
        </View>
        <ListItem 
        title ="Log Out"
        IconComponent={
            <Icon name ="logout" backgroundColor ="#ffe66d" />
        }
        />
      </Screen>
  );
};

const styles = StyleSheet.create({
    container :{
        marginVertical :20
    }, 
    screen: {
        backgroundColor :colors.light,

    },
})


export default AccountScreen;
