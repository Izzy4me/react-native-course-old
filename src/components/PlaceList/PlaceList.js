import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    // here we creates list of places elements
    const placeElements = props.places.map((place, index) => (
        <ListItem
            key={index}
            placeName={place}
            onItemClicked= {() => props.onItemDeleted(index)}
        />
    ));
      
    return(
        <ScrollView style={styles.listContainer}>
            {placeElements}
        </ScrollView>
    );     
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });

export default PlaceList;