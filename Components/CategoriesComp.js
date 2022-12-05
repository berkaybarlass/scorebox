import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const CategoriesComp = () => {
    return (
        <View style={styles.categoriesHeaderTitle}>
            <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryName categoryName={'Futbol'} iconName='md-football-outline' screenName={'LS'} />
                <CategoryName categoryName={'Basketbol'} iconName='md-basketball-outline' screenName={'LS'} />
                <CategoryName categoryName={'Tenis'} iconName='md-tennisball-outline' screenName={'LS'} />
                <CategoryName categoryName={'Voleybol'} iconName='md-baseball-outline' screenName={'LS'} />
                <CategoryName categoryName={'Hentbol'} iconName='md-american-football-outline' screenName={'LS'} />
                <CategoryName categoryName={'Buz Hokeyi'} iconName='md-baseball-outline' screenName={'LS'} />
            </ScrollView>

        </View>
    );
};


const CategoryName = ({ categoryName, iconName, screenName }) => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(screenName)}>
            <View>
                <View style={{ height: 1, backgroundColor: '#5e2282', width: 'auto' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <View style={{ margin: 2, flexDirection: 'row' }}>
                            <Ionicons name={iconName} size={30} color={'#d7d9db'} />
                            <View>
                                <Text style={{ fontSize: 30, textAlign: 'center', color: '#d7d9db' }}>
                                    {categoryName}
                                </Text>
                            </View>
                        </View>
                        <View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: 1, backgroundColor: '#5e2282', height: 36 }} />
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#5e2282', width: 'auto' }} />

            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    categoriesHeaderTitle: {
        flexDirection: 'row',
        backgroundColor: '#7a6de1',
        marginVertical: 20
    }
});

export default CategoriesComp;