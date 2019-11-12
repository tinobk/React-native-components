import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, StyleSheet, StatusBar } from 'react-native';

class ModalComponent extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="gray" barStyle="default" translucent={false}/>
                <Modal
                    animationType="fade" //fade, slide, none
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.containerModal}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }
});

export default ModalComponent;