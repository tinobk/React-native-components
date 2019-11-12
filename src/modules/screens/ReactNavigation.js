import React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LogoTitle extends React.Component {
    render() {
        return (
            // <Image
            //     source={require('../images/add.png')}
            //     style={{ width: 30, height: 30 }}
            // />
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 25 }}>Title Page</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // title:"Home" //Set title normal way
            headerTitle: () => <LogoTitle />, //Customize title
            headerRight: () => (
                <View style={{ flexDirection: "row", marginRight: 8 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={navigation.getParam('clearCount')}>
                        <Image
                            source={require('../images/clear.png')}
                            style={{ width: 36, height: 30 }}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={navigation.getParam('increaseCount')}>
                        <Image
                            source={require('../images/add.png')}
                            resizeMode="cover"
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            ),
        }
    };

    clearCount = () => {
        this.setState({ count: 0 });
    }

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
        this.props.navigation.setParams({ clearCount: this.clearCount })
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('Details', {
                            itemId: 100,
                            count: this.state.count
                        });
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'Details'), //Set title from param
        };
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const { navigation } = this.props; //receive params from previous screen
        const itemId = navigation.getParam('itemId', '0');
        const count = navigation.getParam('count', '0')
        const otherParam = navigation.getParam('otherParam', 'DEFAULT PARAM');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>count: {JSON.stringify(count)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', { //Transit to Details & add to back stack
                            itemId: Math.floor(Math.random() * 100), //Transfer params here
                            otherParam: 'Nested Screen'
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')} //Transit to home, no add to back stack
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()} //pop back stack
                />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: { //Dùng chung header
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff', //màu chữ
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            // }
            // headerRight: () => (
            //     <View style={{ flexDirection: "row", marginRight: 8 }}>
            //         {/* <Button
            //         onPress={() => alert('This is a button!')}
            //         title="Info"
            //     /> */}
            //         <TouchableOpacity onPress={() => alert('This is a button!')}>
            //             <Image
            //                 source={require('../images/add.png')}
            //                 style={{ width: 30, height: 30 }}
            //             />
            //         </TouchableOpacity>
            //     </View>
            // ),
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    }
);

const ReactNavigationComponent = createAppContainer(RootStack);

export default ReactNavigationComponent;