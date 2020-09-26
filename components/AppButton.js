import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ title }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
