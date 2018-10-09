import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Main from "./src/components/Main";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main increaseCount={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
