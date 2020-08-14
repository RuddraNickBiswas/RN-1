import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import stylesCnf from "../../config/stylesCnf";
import AppText from "./AppText";
import Screen from '../Screen'
import PickerItem from "./PickerItem";
const AppPicker = ({ icon, placeholder, items, onSelectItem , selectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false)
    return (
      <>
      <TouchableWithoutFeedback onPress ={() => setModalVisible(true)}>
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={stylesCnf.colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style ={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
      <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={stylesCnf.colors.medium}
        
        />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
       <Screen>
        <Button title="Fuck NE" onPress ={() => {}} />
        <FlatList
        data={items}
        keyExtractor={item => item.value.toString() }
        renderItem ={({item}) => <PickerItem label={item.label} onPress={() => {
            setModalVisible(false)
            onSelectItem(item)
        }}/> } 
        />
        </Screen>
    </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: stylesCnf.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  text:{
      flex:1,
  }
});

export default AppPicker;
