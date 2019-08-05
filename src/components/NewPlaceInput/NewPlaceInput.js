import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';

export default class NewPlaceInput extends Component {

    state = {
        placeName: '',
    };

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    placeholder='Name your place'
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    title='Add place'
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
    )};

    placeNameChangedHandler = (inputText) => {
        this.setState({
            placeName: inputText
        });
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
          // TODO: add error toast
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({placeName: ''});
      }

}

const styles = StyleSheet.create({
      inputContainer: {
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
});