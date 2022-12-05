import React from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground, Image, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native';


const VipScreen = () => {
    return (
        <ImageBackground style={styles.imageStyle} source={require('../assets/bet2.webp')}
            blurRadius={25}>
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
                    <View style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#7a6de1', height: 50, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#fbfafc' }}>  Abone Ol  </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', top: 50 }}>
                    <View>
                        <View style={{ bottom: 20, alignSelf: 'center' }}>
                            <Image source={require('../assets/bet.jpeg')} style={{ height: 90, width: 90, aspectRatio: 1.3, borderRadius: 90, resizeMode: 'contains' }} />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>
                            Bu alanı görebilmen için üyeliğin yetersizdir.
                        </Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}
                    >
                        Aşağıdaki butonu kullanarak üye olabilirsin !
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};


const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    imageStyle: {
        height: deviceHeight,
        width: deviceWidth,
    },
    cardContainer: {
        marginVertical: 20,
        width: deviceWidth - 30,
        backgroundColor: '#f8f5fa',
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: deviceHeight - 500,
        flexDirection: 'column-reverse'
    },
});

export default VipScreen;