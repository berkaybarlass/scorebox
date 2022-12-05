import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const SmallCardComponent = ({MS, screenName, ratio}) =>  {

  const navigation = useNavigation();

    return(
        <View style={styles.smallCardContainer}>
        <TouchableOpacity   onPress = {() => navigation.navigate(screenName)}>
            <View style={{backgroundColor:'#7a6de1', borderTopStartRadius:10, borderTopEndRadius:10, height:'auto'}}>
                <Text style={styles.ratioTitle}>
                  {MS}
                </Text>
            </View>
                <Text style={styles.ratioText}>
                 {ratio}
                </Text>
        </TouchableOpacity>
      </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles= StyleSheet.create({
  cardContainer:{
    marginVertical:20,
    width: deviceWidth - 30,
    backgroundColor:'#f8f5fa', 
    height:'auto',
    borderRadius:10,
    alignSelf:'center'
  },
  horizontalLine:{
    height:1,
    backgroundColor:'#d7d9db',
    width: deviceWidth
  },
  smallCardContainer:{
    marginVertical:20,
    width:45,
    backgroundColor:'#e9e4ed',
    height:45,
    borderRadius:10,
    marginHorizontal:5,
    alignSelf:'center'
  },
  ratioTitle:{
    textAlign:'center',
    height:15,
    fontWeight:'bold',
    color:'white'
  },
  ratioText:{
    textAlign:'center',
    top:3
  },
  mediumCardContainer:{
    marginVertical:20,
    width:70,
    backgroundColor:'#7a6de1',
    height:45,
    borderRadius:10,
    marginHorizontal:5,
    alignSelf:'center'
  },
  timeAndIcon:{
    flexDirection:'row',
    alignSelf:'center',
    borderRadius:20,
    backgroundColor:'#d7d9db',
    marginVertical:5
}
})

export default  SmallCardComponent;


