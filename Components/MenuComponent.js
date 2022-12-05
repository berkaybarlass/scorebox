import * as React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MenuListComponent = ({menuListname, url}) =>{
    return(
        <TouchableOpacity style={styles.menuTextPosition} onPressIn={()=> Linking.openURL(url)} >
                <Text style={styles.menuCategorisText}>
                    {menuListname}  
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menuTextPosition:{
    padding:10,
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:10
    },
    menuCategorisText:{
    color:'gray',
    fontSize:'20',
    fontWeight:'350',
    textAlign:'center'
    }
})

export default MenuListComponent;