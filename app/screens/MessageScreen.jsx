import React ,{useState , useEffect} from "react";
import { FlatList , StyleSheet, View } from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const InitialMessages = [
    {
        id : 1,
        title : "t1",
        description :"D1",
        image : require('../assets/mosh.jpg')
    },
    {
        id : 2,
        title : "t2",
        description :"D2",
        image : require('../assets/mosh.jpg')
    },
    {
        id : 3,
        title : "t2",
        description :"D2",
        image : require('../assets/mosh.jpg')
    },
]

const MessagesScreen = () => {
      
    const [messages ,setMessages] = useState(InitialMessages)
    
    const handleDelete = item => {
   
       setMessages(messages.filter(m => m.id !== item.id))
    }

  return( 
      <Screen>
      <FlatList
      data={messages}
      keyExtractor = {messages => messages.id.toString()}
      renderItem = {({item}) => 
      
      <ListItem 
      title={item.title}
      subTitle ={item.description}
      image ={item.image}
    //   onPress ={() => console.log("messageSend", item)}
      renderRightActions={ () =>  <ListItemDeleteAction onPress={() => handleDelete(item)}/> }
      
      />
     
    }
        ItemSeparatorComponent = {ListItemSeparator}
      />
    </Screen>
     
  );
};

const styles = StyleSheet.create({
    
})

export default MessagesScreen;
