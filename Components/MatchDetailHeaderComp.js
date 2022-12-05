import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Dimensions, Text, ImageBackground} from 'react-native';


const MatchDetailHeader = ({firstTeam, secondTeam}) => {  

    return (
        
        <ImageBackground  style={styles.imageStyle} source={require('../assets/stadium.jpg')}
        blurRadius={4}>
            <View style={{flexDirection:'row' , justifyContent:'space-around', marginVertical:130, alignItems:'center'}}>
                <View>
                    <Text style={styles.teamsText}>
                        {firstTeam} 
                    </Text>
                </View>
            <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <View>
                    <Text style={styles.matchTime}>
                        5 Aralık
                    </Text>
                </View>
                <View>
                    <Text style={styles.matchTime}>
                    10:00
                    </Text>
                </View>
            </View>
                <View>
                    <Text style={styles.teamsText}>
                        {secondTeam}
                    </Text>
                </View>

            </View>

        </ImageBackground>
    );
  };
  

  const deviceWidth = Math.round(Dimensions.get('window').width);
  
  const styles = StyleSheet.create({
    imageStyle:{
      height:'auto',
      width:deviceWidth,
    },
    teamsText:{
        color:'white',
        fontWeight:'bold',
        fontSize:25
    },
    matchTime:{
        color:'white',

    }
  });

  export default MatchDetailHeader;