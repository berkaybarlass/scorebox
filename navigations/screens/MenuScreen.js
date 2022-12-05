import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuListComponent from '../../Components/MenuComponent';
import Header from '../../Components/HeaderComponent';


export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.infoArea}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', marginVertical: 10 }}>
                    <Ionicons name='star' size={12} color={'gray'} />
                    <Ionicons name='star' size={12} color={'gray'} />
                    <Ionicons name='star' size={12} color={'gray'} />
                    <Ionicons name='star' size={12} color={'gray'} />
                    <Ionicons name='star' size={12} color={'gray'} />
                </View>
                <View style={styles.verticleLine}></View>
                <Text style={styles.infoTextsArea}>
                    Sıralama {"\n"} #45
                </Text>
                <View style={styles.verticleLine}></View>
                <Text style={styles.infoTextsArea}>
                    Kullanıcı Sayısı{"\n"} 34567</Text>
            </View>
            <View style={styles.seperator} />
            <MenuListComponent menuListname={"Premium"} url={('https://www.google.com')} />
            <View style={styles.seperator} />
            <MenuListComponent menuListname={"Gizlilik Politikası"} url={('https://reactnative.dev/docs/appregistry#startheadlesstask')} />
            <View style={styles.seperator} />
            <MenuListComponent menuListname={"Kullanıcı Sözleşmesi"} url={('https://reactnative.dev/docs/scrollview#endfillcolor-android')} />
            <View style={styles.seperator} />
            <MenuListComponent menuListname={"Puan Ver"} url={('https://reactnavigation.org/docs/navigation-events/')} />
            <View style={styles.seperator} />
            <MenuListComponent menuListname={"İletişim"} url={('https://reactnavigation.org/docs/connecting-navigation-prop/')} />
            <View style={styles.seperator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoArea: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    infoTextsArea: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    verticleLine: {
        height: 30,
        width: 1,
        backgroundColor: '#ddd',
        top: 5
    },
    seperator: {
        height: 1,
        backgroundColor: '#ddd'
    }
})
