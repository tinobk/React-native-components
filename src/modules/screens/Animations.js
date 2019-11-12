import React from 'react';
import { Animated, View, Dimensions, Image } from 'react-native';

const FadeInView = (props) => {
    const [fadeAnim] = React.useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 3000,
            }
        ).start();
    })

    return (
        <Animated.View                     // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FadeInView style={{width: Dimensions.get('window').width}}>
                {/* <Text style={{ fontSize: 28, textAlign: 'center', margin: 10, backgroundColor: 'powderblue' }}>Fading in</Text> */}
                <Image style={{width: '100%', height:'100%'}} source={require('./images/image1.jpg')} />
            </FadeInView>
        </View>
    )
}
