import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={styles.input1}
                    maxLength={10}
                    placeholder='Please Enter Something'
                    onChangeText={text => this.setState({ text })}
                />
                <TextInput
                    style={styles.input2}
                    maxLength={10}
                    placeholder='Please Enter Something'
                    onChangeText={text => this.setState({ text })}
                />
                <TextInput
                    style={styles.input3}
                    multiline
                    numberOfLines={2}
                    keyboardType="phone-pad"
                    autoCapitalize="words"
                    placeholder='Please Enter Something'
                    onChangeText={text => this.setState({ text })}
                />

                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input1: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
    },
    input2:{
        margin:10,
        height:40,
        borderColor:'black',
        borderStyle:'dotted',
        borderRadius:10,
        borderWidth:1
    },
    input3:{
        height:40,
        borderStyle:'solid',
        borderWidth:1,        
        borderColor:'black',
    }
});