import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = ({ children, visible }) => {
  return <View>{visible && <Text style={styles.text}>{children}</Text>}</View>;
};

export default Error;
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "red",
  },
});
