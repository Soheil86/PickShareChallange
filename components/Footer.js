import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import AppPicker from "./AppPicker";

const dateDays = [
  { lable: "Saturday", value: 1 },
  { lable: "Sunday", value: 2 },
  { lable: "Monday", value: 3 },
];

const Footer = () => {
  return (
    <View style={styles.container}>
      <AppPicker items={dateDays} icon="Fontisto" placeholder="Date" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Footer;
