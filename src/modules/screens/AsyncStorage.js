import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStorageComponent extends React.Component {
    state = {
        name: ''
    }

    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('name', value);
        } catch (error) {
            // Error saving data
        }
    };

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                this.setState({ name: value })
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    componentDidMount = () => {
        this.retrieveData();
    }

    setName = (value) => {
        this.storeData(value);
        this.setState({ name: value });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={this.setName} />
                <Text>
                    {this.state.name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        margin: 5,
        width: 100,
        borderWidth: 1,
        backgroundColor: '#7685ed'
    }
})