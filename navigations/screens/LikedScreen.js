import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


const LikedPageTitle = ({title, screenName}) => {

  const navigation =useNavigation();

  return(
    <Pressable onPressOut={() => navigation.navigate(screenName)}>
    <View accessibilityRole='button'>
    <Text style={styles.title}>
      {title}
    </Text>
  </View>
  </Pressable>
  )
};


const LikedScreen = () => {
  return (
      <View>
        <View style={{backgroundColor:'#7a6de1', height:100 }}/>
        <View style={{backgroundColor:'#7a6de1'}}>
          <Text style={{color:'white', fontSize:40, marginHorizontal:26}}>
            Beğeniler
          </Text>
        </View>
        <View>
            <View style={{ backgroundColor: '#7a6de1', height: 70, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
              <LikedPageTitle title={'Hepsi'}  screenName={('Menü')} />
              <LikedPageTitle title={'Kazananlar'} />
              <LikedPageTitle title={'Kaybedenler'} />
            </View>
            </View>
      </View>
  );
}



const styles = StyleSheet.create({
  menuTextPosition: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize:20,
    textAlign:'center',
    color:'white'
  }
})

export default LikedScreen;