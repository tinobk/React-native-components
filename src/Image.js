import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

class ImageComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground source={{ uri: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg' }} style={{ width: '100%', height: '100%', opacity: 0.65 }} />
                <View style={{ position:'absolute' }}>
                    <Image
                        style={styles.image1}
                        source={{ uri: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg' }}
                    />
                    <Image
                        style={styles.image2}
                        source={require('./images/image1.jpg')}
                    />
                    <Image
                        style={styles.image3}
                        // resizeMode='contain'
                        source={require('./images/image1.jpg')}
                    />
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    image1: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image2: {
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    image3: {
        height: 100,
        width: 100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    }
})

export default ImageComponent;