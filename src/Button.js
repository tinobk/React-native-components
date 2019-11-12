import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Clipboard,
    TextInput,
    ToastAndroid,
    KeyboardAvoidingView
} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
}

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50);
        return null;
    }
    return null;
}

export default class ButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Aleart title from state',
            message: 'Message from state',
            content: 'this content should be copy to Clipboard'
        }
    }

    showAlertDialog = () => {
        Alert.alert(
            this.state.title,
            this.state.message,
            [
                {
                    text: "Ask me later",
                    onPress: () => {
                        console.log('====================================')
                        console.log("Ask me later pressed")
                        console.log('====================================')
                    }
                },
                {
                    text: "Cancel",
                    onPress: () => {
                        console.log('====================================');
                        console.log("Cancel Pressed");
                        console.log('====================================');
                    }
                }
            ],
            { cancelable: false }
        )
    }

    changeStateContentAlert = () => {
        this.setState({
            title: "Title has changed!",
            message: "Message has changed!"
        });
    }

    copyToClipboard = () => {
        Clipboard.setString(this.state.content)
        ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT, ToastAndroid)
        // ToastAndroid.showWithGravity("Copied To Clipboard!", ToastAndroid.SHORT, ToastAndroid.CENTER)
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
                <SafeAreaView>
                    <View>
                        <Text style={styles.title}>
                            The title and onPress handler are required. It is recommended to set
                            accessibilityLabel to help make your app usable by everyone.
                    </Text>
                        <Button
                            title="Show Alert Dialog"
                            onPress={this.showAlertDialog}
                        />
                    </View>
                    <Separator />
                    <View>
                        <Text style={styles.title}>
                            Adjust the color in a way that looks standard on each platform. On
                            iOS, the color prop controls the color of the text. On Android, the
                            color adjusts the backgroud color of the button.
                    </Text>
                        <Button
                            title="Change Alert Dialog Content"
                            color="#f194ff"
                            onPress={this.changeStateContentAlert}
                        />
                    </View>
                    <Separator />
                    <View>
                        <Text style={styles.title}>
                            All interaction for the component are disabled.
                    </Text>
                        <Button
                            title="Copy Clipboard"
                            onPress={this.copyToClipboard}
                        />
                        <TextInput style={{ marginTop: 8 }} placeholder="Here is Text Input" />
                    </View>
                    <Separator />
                    <View>
                        <Text style={styles.title}>
                            This layout strategy lets the title define the width of the button.
                    </Text>
                        <View style={styles.fixToText}>
                            <Button
                                disabled
                                title="Left button"
                                onPress={() => Alert.alert('Left button pressed')}
                            />
                            <Button
                                title="Right button"
                                onPress={() => Alert.alert('Right button pressed')}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
