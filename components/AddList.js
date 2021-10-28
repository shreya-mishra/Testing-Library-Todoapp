import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddList = ({ value, onChange, onPressAdd }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Add Todo...'
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
      <TouchableOpacity onPress={onPressAdd} style={styles.addButton}>
        <Text style={styles.buttonStyles}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 275,
  },
  addButton: {
    backgroundColor: "green",
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginLeft: 15,
  },
  buttonStyles: {
    color: "white",
    fontSize: 32,
  },
});
