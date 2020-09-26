import React, { useState, Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import API from "apisauce";
import axios from "axios";

// const baseURL = "https://pickshare.herokuapp.com/users/challenge";
// const ApiCall = API.create({ baseURL: baseURL });

class App extends Component {
  render() {
    //
    return (
      <frameElement>
        <Header title="PICKSHARE" />
        <Content />
        <Footer />
      </frameElement>
    );
  }

  componentDidMount() {
    axios
      .get("https://pickshare.herokuapp.com/users/challenge/getData")
      .then((res) => console.log(res.data));
  }

  // function getDataFromApi() {
  //   return fetch("https://pickshare.herokuapp.com/users/challenge/getData")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.movies;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: "center",
  //     // justifyContent: "center",
  //   },
  // });
}
export default App;
