import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

import userApi from "../api/users";

const Content = ({
  depotName,
  depotAddress,
  depotZip,
  depotCity,
  qrCode,
  propId,
  returnDate,
  senderLogo,
}) => {
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     loadUsers();
  //   }, []);

  //   const loadUsers = async () => {
  //     const response = await userApi.getUsers();

  //     console.log(response);
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.firstSection}>
        <Text>Pachet für dich!</Text>
        <AppText style={styles.title}>{depotName}</AppText>
        <AppText style={styles.subTitle}>{depotAddress}</AppText>
        <AppText style={styles.subTitle}>{depotZip}</AppText>
        <AppText style={styles.subTitle}>{depotCity}</AppText>
      </View>
      <View style={styles.detailsContainer}>
        <Image style={styles.qrCode} source={qrCode} />
        <View>
          <Image style={styles.senderLogo} source={senderLogo} />
          <AppText style={styles.title}>Sendungsnr</AppText>
          <AppText style={styles.subTitle}>{propId}</AppText>
          <AppText style={styles.title}>Restabholzeit</AppText>
          <AppText style={styles.subTitle}>{returnDate}</AppText>
        </View>
      </View>
    </View>
  );
};

Content.defaultProps = {
  depotName: "depotName",
  depotAddress: "depotAddress",
  depotZip: "depotZip",
  depotCity: "depotCity",
  title: "PICKSHARE",
  propId: "Sendungsnr",
  returnDate: "Restabholzeit",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    flex: 1,
  },
  firstSection: {
    flexDirection: "column",
  },
  detailsContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  qrCode: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
    marginBottom: 7,
  },
  title: {
    fontWeight: "500",
    marginBottom: 1,
  },
  textview: {
    flexDirection: "column",
  },
  SenderLogo: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    // position: "absolute",
    // top: 40,
    // left: 30,
  },
  QRCode: {
    width: 200,
    height: 200,
    backgroundColor: "red",
  },
  propId: {
    backgroundColor: "gray",
    width: 100,
    height: 20,
  },
  depotName: {
    backgroundColor: "blue",
    width: 100,
    height: 20,
  },
  depotAddress: {
    backgroundColor: "green",
    width: 100,
    height: 20,
  },
  returnDate: {
    backgroundColor: "black",
    width: 100,
    height: 20,
  },
});

export default Content;
