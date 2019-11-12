import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class TextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: 'Title Text',
            bodyText: 'Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text Body Text'
        }
    }

    onPressTitle = () => {
        alert('Pressed title')
    }

    render() {
        return (
            <Text style={styles.baseText}>
                <Text style={styles.textTitle} onPress={this.onPressTitle}>
                    {this.state.titleText}
                    <Text style={{color:'red'}}>Nested Text{'\n\n'}</Text>
                </Text>
                <Text>
                    {this.state.bodyText}
                </Text>
            </Text>
        )
    };
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'sans-serif',
        textAlign:'center'        
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign:'center'
    },
})

export default TextComponent;