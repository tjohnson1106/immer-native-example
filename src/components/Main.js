import React, { Component } from "react";
import { View } from "react-native";
import produce from "immer";

const counter = produce((draft, props) => {
  draft.count.counter += props.increaseCount;
});

class Main extends Component {
  state = {
    count: {
      counter: 0
    },
    user: {
      name: "Mofo"
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(counter);
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.user === prevState.count);
  }

  render() {
    return <View>{this.state.count.counter}</View>;
  }
}

export default Main;
