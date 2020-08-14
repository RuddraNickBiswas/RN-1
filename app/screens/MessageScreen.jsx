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
        title : "HEy",
        description :"D1",
        image : require('../assets/favicon.png')
    },
    
]

const MessagesScreen = () => {
      
    const [messages ,setMessages] = useState(InitialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = item => {
   
       setMessages(messages.filter(m => m.id !== item.id))
    }

  return( 
      <Screen>
      <FlatList
      // horizontal = {true}
      data={messages}
      keyExtractor = {messages => messages.id.toString()}
      renderItem = {({item}) => 
      
      <ListItem 
      title={item.title}
      subTitle ={item.description}
      image ={item.image}
      onPress ={() => console.log("messageSend")}
      renderRightActions={ () =>  <ListItemDeleteAction onPress={() => handleDelete(item)}/> }
      
      />
    
    }
        ItemSeparatorComponent = {ListItemSeparator}
        refreshing ={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id : 2,
              title : "Test title 2",
              description :"Test Description 2",
              image : require('../assets/favicon.png')
          },
          {
              id : 3,
              title : "Test title 3",
              description :"Test Description 3",
              image : require('../assets/favicon.png')
          },
          {
            id : 4,
            title : "Test title 4",
            description :"Test Description 4",
            image : require('../assets/favicon.png')
          },
          {
            id : 5,
            title : "Test title 5",
            description :"Test Description 5",
            image : require('../assets/favicon.png')
          },
          ])
        }}
      />
    </Screen>
     
  );
};

const styles = StyleSheet.create({
    
})

export default MessagesScreen;
