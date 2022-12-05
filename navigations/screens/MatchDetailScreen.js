import React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import MatchDetail from '../../Components/MatchDetail';
import MatchDetailHeader from '../../Components/MatchDetailHeaderComp';

const scoreData = [
  {
    matchTitle: 'Maç sonucu',
    MS: 'Berkay',
    ratio:1,
    id:1,
    screenName:'MDS'
  },
  {
    matchTitle: 'İlk Yarı Sonucu',
    MS: 'barlas',
    ratio: 2,
    id:2,
    screenName:'MDS'

  },
  {
    matchTitle: 'İkinci Yarı Sonucu',
    MS: 'yusuf',
    ratio:3,
    id:3,
    screenName:'MDS'
  },
  {
    matchTitle: 'İkinci Yarı Sonucu',
    MS: 'nursah',
    ratio:4,
    id:4,
    screenName:'MDS'
  },
  {
    matchTitle: 'İkinci Yarı Sonucu',
    MS: 'bayat',
    ratio:5,
    id:5,
    screenName:'MDS'
  },
  {
    matchTitle: 'İkinci Yarı Sonucu',
    MS: 'bayat',
    ratio:6,
    id:6,
    screenName:'MDS'
  },
]


const  MatchDetailScreen = () => {
    return (
      <View>
        <ScrollView>

        <MatchDetailHeader/>
        <FlatList
          data={scoreData}
          renderItem={({ item }) => {
            return <MatchDetail info={item} />;
          }}
          keyExtractor={(scoreData) => scoreData.id.toString()}
          
        />
        </ScrollView>

      </View>
    );
  }

export default MatchDetailScreen;