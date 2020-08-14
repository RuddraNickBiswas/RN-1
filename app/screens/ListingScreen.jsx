import React from "react";
import { View ,FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from  '../config/color'


const listings =[
    {
        id :1,
        title : "Red Jacket for sale",
        price : 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id :2,
        title : "Couch in great condition",
        price : 1000,
        image: require('../assets/couch.jpg')
    },
]

const ListingSceen = () => {
  return( 
      
      <Screen style ={styles.screen}>
          <FlatList
          data={listings} 
          keyExtractor ={listing => listing.id.toString()}
          renderItem={({item}) => 
        <Card 
            title ={item.title}
            subTitle ={"$" + item.price}
            image = {item.image}
        />
        }
          />
      </Screen>
  );
};

const styles = StyleSheet.create({
    screen : {
        padding:20,
        color: colors.light
    }
})


export default ListingSceen;