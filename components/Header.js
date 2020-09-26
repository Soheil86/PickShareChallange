import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./../assets/header.png")} />
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
  img: {
    marginTop: 100,
    width: 650,
    height: 150,
  },
});

export default Header;
