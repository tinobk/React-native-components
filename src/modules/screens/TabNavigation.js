import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Home"
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'green' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Favorites"
                    onPress={() => this.props.navigation.navigate('Favorites')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class FavoriteScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Favorites"
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'tomato' }}>
                <Text>Favorite Movies!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Settings"
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'yellow' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Details"
        };
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

//Design Badge Style
class IconWithBadge extends React.Component {
    render() {
        const { name, badgeCount, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Icon name={name} size={size} color={color} />
                {badgeCount > 0 && (
                    <View
                        style={{
                            // /If you're using react-native < 0.57 overflow outside of the parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'tomato',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

//Set HomeIconWithBadge
const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={1} />;
};

//Set TabBarIcon
const getTabBarIcon = (navigation, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Home') {
        iconName = "ios-home";
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Settings') {
        iconName = "ios-settings";
    } else if (routeName === 'Favorites') {
        iconName = "ios-list-box";
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
    }
);

const SettingsStack = createStackNavigator({
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
});

const FavortiesStack = createStackNavigator({
    Favorites: { screen: FavoriteScreen },
    Details: { screen: DetailsScreen },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Favorites: { screen: FavortiesStack },
        Settings: { screen: SettingsStack }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) =>
                getTabBarIcon(navigation, tintColor),
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: true,
    }
);

export default createAppContainer(TabNavigator);