import React from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    // here we creates list of places elements
    const placeElements = props.places.map((place, index) => (
        <ListItem key={index} placeName={place} />
    ));
      
    return(
        <View style={styles.listContainer}>
            {placeElements}
        </View>
    );     
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });

export default PlaceList;