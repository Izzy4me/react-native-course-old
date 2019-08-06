import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import NewPlaceInput from './src/components/NewPlaceInput/NewPlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {

  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {
    this.setState((previousState) => {
      return {
        placeName: '',
        places: previousState.places.concat(placeName)
      }
    });
  }

  placeDeletedHandler = (index) => {
    this.setState((previousState) => {
      return {
        // i is local (for previous state) index for places
        places: previousState.places.filter((place, i) => {
          return i !== index;
        })    
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <NewPlaceInput 
            onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList 
            places={this.state.places}
            onItemDeleted={this.placeDeletedHandler}
          />
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
});
