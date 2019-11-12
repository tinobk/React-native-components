import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';

export default class PickerComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: 'Java',
            index: 0
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: '50%'}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue, index: itemIndex })
                    }>
                    <Picker.Item label="Java" value="Java" />
                    <Picker.Item label="JavaScript" value="JavaScrip" />
                    <Picker.Item label="React-Native" value="React-Native" />
                </Picker>
                <Text style={{marginTop: 20, fontSize:20}}>{this.state.language} - {this.state.index}</Text>
            </View>
        );
    }
}