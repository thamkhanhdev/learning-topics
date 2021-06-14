import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Default home screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textShadowColor:0xFFAB,
    textDecorationColor:0xFFAB,
  }
});

export default HomeScreen;
