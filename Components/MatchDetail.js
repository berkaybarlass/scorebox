import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SmallCardComponent from './SmallCardContainer';


const MatchDetail = ({ info }) => {


  const { matchTitle, MS, ratio, screenName } = info;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.matchScoreArea}>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>
          {matchTitle}
        </Text>
        <View style={styles.horizontalLine} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <SmallCardComponent
          screenName={screenName}
          MS={MS}
          ratio={ratio} />
        <View>
        </View>
      </View>

    </View>

  )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    width: deviceWidth - 30,
    backgroundColor: '#f8f5fa',
    height: 'auto',
    borderRadius: 10,
    alignSelf: 'center'
  },
  matchScoreArea: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: 'white',
    height: 20
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#d7d9db',
    width: deviceWidth - 30
  },
  smallCardContainer: {
    marginVertical: 20,
    width: 45,
    backgroundColor: '#e9e4ed',
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    alignSelf: 'center'
  },
  ratioTitle: {
    textAlign: 'center',
    height: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  ratioText: {
    textAlign: 'center',
    top: 3
  },
});


export default MatchDetail;