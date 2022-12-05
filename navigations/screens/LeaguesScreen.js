import * as React from 'react';
import { View, StatusBar, StyleSheet, FlatList, Text} from 'react-native';
import CategoriesComp from '../../Components/CategoriesComp';
import Header from '../../Components/HeaderComponent';
import MatchCard from '../../Components/MatchCard';


const matches = [
  
    {
      matchCountryText: 'Türkiye', 
      firstTeam: 'Fenerbahçe' , 
      secondTeam: 'Galatasaray',
      matchTime: '10:00',
      ratio: '%29',
      id:1
    },
    {
        matchCountryText: 'Türkiye',
        firstTeam: 'Beşiktaş' ,
        secondTeam: 'Trabzonspor',
        matchTime: '12:00',
        ratio: '%29',
        id:2
    },
    {
        matchCountryText: 'Türkiye',
        firstTeam: 'Karabük Kardemir Spor' ,
        secondTeam: 'Ümraniyespor',
        matchTime: '10:00',
        ratio: '%29',
        id:3
    },
    {
        matchCountryText: 'Fransa',
        firstTeam: 'PSG' ,
        secondTeam: 'HSA',
        matchTime: '10:00',
        ratio: '%29',
        id:3
    },
    {
      matchCountryText: 'hransa',
      firstTeam: 'PSG' ,
      secondTeam: 'HSA',
      matchTime: '10:00',
      ratio: '%29',
      id:3
  }
];


const LeaguesScreen = () => {
  

    return (
      <View style={styles.container}>
        <Header/>
        <StatusBar barStyle='default' />
        <CategoriesComp/>


        <FlatList
          data={matches}
          renderItem={({ item }) => {
            return <MatchCard info={item} />;
          }}
          keyExtractor={(matches) => matches.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };


const styles = StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor: '#dddae0',
        alignItems: 'center',
    }
})

export default LeaguesScreen;