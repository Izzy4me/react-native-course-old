import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemClicked}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default ListItem;