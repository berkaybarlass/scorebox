import React from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallCardComponent from './SmallCardContainer';
import { useNavigation } from '@react-navigation/native';
import MatchCard from './MatchCard';



const CardFront = () => {

  const navigation = useNavigation(); 

  const ratio = '%' + Math.floor(Math.random() * 100)
  const ratio1 = '%' + Math.floor(Math.random() * 100)
  const ratio2 = '%' + Math.floor(Math.random() * 100)
  const ratio3 = '%' + Math.floor(Math.random() * 100)
  return (
    
    <View style={styles.cardContainer}>
      <View style={{ borderTopStartRadius: 10, borderTopEndRadius: 10, backgroundColor: '#7a6de1', height: 30, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#fbfafc' }}>  Türkiye </Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>
          Fenerbahçe
        </Text>
        <View style={styles.timeAndIcon}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name='time-outline' size={15} color={'black'} />
          </View>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 15 }}>
              10:30
            </Text>
          </View>
        </View>
        <Text style={{ fontWeight: 'bold', }}>
          Galatasaray
        </Text>
      </View>
      <View style={styles.horizontalLine} />



      <View style={{ flexDirection: 'column' }}>


        <View style={{ flexDirection: 'row' }}>
          <SmallCardComponent
            screenName={('MDS')}
            MS={'TIP'}
            ratio={ratio} />
          <SmallCardComponent
            screenName={('Popüler')}
            MS={'VİP'}
            ratio={<Ionicons name='list' size={25} color={'#7a6de1'} />} />
          <View style={{ width: 1, backgroundColor: '#d7d9db', height: 100 }} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'MSX'}
            ratio={ratio1} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'MS2'}
            ratio={ratio2} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'B2'}
            ratio={ratio3}
          />
          <View style={styles.mediumCardContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Popüler')} >
              <View style={{ alignItems: 'center' }} >
                <Ionicons name='eye' size={25} color={'white'} />
              </View>

              <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: 'white' }}>
                  GÖR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


      </View>
      <View style={styles.horizontalLine} />
      <TouchableOpacity
        onPress={() => this.flipView.flipLeft()}
        style={{ alignSelf: 'center' }}
        >
        <Ionicons name='ios-thumbs-up-outline' size={25} color={'#7a6de1'} />
      </TouchableOpacity>
    </View>
  );
};

const renderBack = () => {

  const navigation = useNavigation(); 

  const ratio = '%' + Math.floor(Math.random() * 100)
  const ratio1 = '%' + Math.floor(Math.random() * 100)
  const ratio2 = '%' + Math.floor(Math.random() * 100)
  const ratio3 = '%' + Math.floor(Math.random() * 100)
  return (
    
    <View style={styles.cardContainer}>
      <View style={{ borderTopStartRadius: 10, borderTopEndRadius: 10, backgroundColor: '#7a6de1', height: 30, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#fbfafc' }}>  Türkiye </Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>
          Fenerbahçe
        </Text>
        <View style={styles.timeAndIcon}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name='time-outline' size={15} color={'black'} />
          </View>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 15 }}>
              10:30
            </Text>
          </View>
        </View>
        <Text style={{ fontWeight: 'bold', }}>
          Galatasaray
        </Text>
      </View>
      <View style={styles.horizontalLine} />



      <View style={{ flexDirection: 'column' }}>


        <View style={{ flexDirection: 'row' }}>
          <SmallCardComponent
            screenName={('MDS')}
            MS={'TIP'}
            ratio={ratio} />
          <SmallCardComponent
            screenName={('Popüler')}
            MS={'VİP'}
            ratio={<Ionicons name='list' size={25} color={'#7a6de1'} />} />
          <View style={{ width: 1, backgroundColor: '#d7d9db', height: 100 }} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'MSX'}
            ratio={ratio1} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'MS2'}
            ratio={ratio2} />
          <SmallCardComponent
            screenName={('LGS')}
            MS={'B2'}
            ratio={ratio3}
          />
          <View style={styles.mediumCardContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Popüler')} >
              <View style={{ alignItems: 'center' }} >
                <Ionicons name='eye' size={25} color={'white'} />
              </View>

              <View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: 'white' }}>
                  GÖR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


      </View>
      <View style={styles.horizontalLine} />
      <TouchableOpacity
        onPress={() => this.flipView.flipLeft()}
        style={{ alignSelf: 'center' }}
        >
        <Ionicons name='ios-thumbs-up-outline' size={25} color={'#7a6de1'} />
      </TouchableOpacity>
    </View>
  );
};


const FlipCard = () => {
  return (
    <View>
      <GestureFlipView width={300} height={500} ref={(ref) => this.flipView = ref}>
        {CardFront()}
        {renderBack()}
      </GestureFlipView>
    </View>
  )
};


const deviceWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontStyle: {
    width: 300,
    height: 500,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 500,
    backgroundColor: '#f0f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cardContainer: {
    marginVertical: 20,
    width: deviceWidth - 30,
    backgroundColor: '#f8f5fa',
    height: 'auto',
    borderRadius: 10,
    alignSelf: 'center'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#d7d9db',
    width: deviceWidth
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
  mediumCardContainer: {
    marginVertical: 20,
    width: 70,
    backgroundColor: '#7a6de1',
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    alignSelf: 'center'
  },
  timeAndIcon: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#d7d9db',
    marginVertical: 5
  }
});

export default FlipCard;