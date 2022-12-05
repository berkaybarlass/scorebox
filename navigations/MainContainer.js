import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';


import LeaguesScreen from "./screens/LeaguesScreen";
import LikedScreen from './screens/LikedScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MenuScreen from './screens/MenuScreen';
import MatchDetailScreen from './screens/MatchDetailScreen';
import VipScreen from '../Components/VipScreen';


const leaguesName = "Ligler"
const likedName = "Beğeniler"
const favoritesName = "Popüler"
const menuName = "Menü"


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const LeaguesStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='LGS' component={LeaguesScreen}/>
        <Stack.Screen name='LS' component={LikedScreen}/>
        <Stack.Screen name='MDS' component={MatchDetailScreen}  />
        <Stack.Screen name='MENU' component={MenuScreen} />
        <Stack.Screen name='Favoriler' component={FavoritesScreen}/>
        <Stack.Screen name='Vip' component={VipScreen}/>
    </Stack.Navigator>
  )
}


const MainContainer = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName={leaguesName}
    screenOptions={({ route })  => ({
      headerShown:false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === leaguesName) {
          iconName = focused ? 'ios-football-sharp' : 'ios-football-outline';

        } else if (rn === likedName) {
          iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
        } else if (rn === favoritesName) {
          iconName = focused ? 'md-trending-up' : 'md-trending-up-outline';
        } 
        else if (rn === menuName) {
          iconName = focused ? 'ios-menu' : 'ios-menu-outline';
        } 
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#302369',
      inactiveTintColor: 'grey',
      labelStyle: {  fontSize: 12 },
      style : { padding:10, height:70,}
    }}>
    <Tab.Screen name={leaguesName}  component={LeaguesStack}/>
    <Tab.Screen name={likedName} component={LikedScreen} />
    <Tab.Screen name={favoritesName} component={FavoritesScreen}
             options={{
                tabBarStyle: { display: "none" },
              }} />
    <Tab.Screen name={menuName} component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default MainContainer;