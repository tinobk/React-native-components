import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ViewComponent extends Component {
    render() {
        return (
            <View
                style={{
                    //chỉ định hướng sắp xếp của các thành phần con bên trong nó
                    flexDirection:'row',
                    height: 100,
                    padding: 20
                }}>
                <View style={{backgroundColor: 'blue', flex: 0.3}}/>
                <View style={{backgroundColor: 'red', flex: 0.5}}/>
                <Text>Hello World!</Text>
            </View>    
        );
    }
}

export default ViewComponent;