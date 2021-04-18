import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import {NavigationContainer} from '@react-navigation/native';

import { View,Image,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import profile from '../tabs/profile';
import offers from '../tabs/offers';
import admin from '../admin/admin';



const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator  
    tabBarOptions={{style:{
        backgroundColor:'#fff',
        elevation:2,position:'absolute',
        bottom:20,
        left:10,
        right:10,
        borderRadius:20,
        }}}
            >
      <Tab.Screen name="HOME" component={HomeScreen} 
      options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Image style={{height:25,width:25}} source={require('../icons/home.png')} />
                    
                </View>
            )          
      }} />
      <Tab.Screen name="Offers" component={offers}
       options={{
        tabBarIcon: ({}) => (
            <View>
                <Image style={{height:25,width:25}} source={require('../icons/discount.png')} />
                
            </View>
        )          
  }}/>
      <Tab.Screen name="Profile" component={profile} 
      options={{
        tabBarIcon: ({}) => (
            <View>
                <Image style={{height:25,width:25}} source={require('../icons/profile.png')} />
                
            </View>
        )          
  }}/>
  <Tab.Screen name="admin" component={admin} 
      />
    </Tab.Navigator>
    
  </NavigationContainer>
  

  
  )
  
}
export default Tabs;