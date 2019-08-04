import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (inputText) => {
    this.setState({
      placeName: inputText
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      // TODO: add error toast
      return;
    }

    this.setState((previousState) => {
      return {
        placeName: '',
        places: previousState.places.concat(previousState.placeName)
      }
    });

  }

  render() {
    // here we creates list of places elements
    const placeElements = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder='Name your place'
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            title="Add place"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}  
          />
        </View>
        <View style={styles.listContainer}>
          {placeElements}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
