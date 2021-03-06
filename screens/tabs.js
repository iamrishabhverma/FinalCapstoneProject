import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

import { View,Image,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import profile from '../tabs/profile';
import offers from '../tabs/offers';
import admin from '../admin/admin';
import { ScrollView } from 'react-native-gesture-handler';
import kids from './kids';

const drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Tabs({ navigation }){
  return (
    

    

    <NavigationContainer  independent={true}>
       
       
    <Tab.Navigator  
    tabBarOptions={{style:{
        backgroundColor:'#fff',
        position:'absolute',
        bottom:10,
        left:10,
        right:10,
        borderRadius:20,
        }}}
            >
      <Tab.Screen name="Home" component={HomeScreen} 
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
  <Tab.Screen name="Kids" component={kids} 
      options={{
        tabBarIcon: ({}) => (
            <View>
                <Image style={{height:25,width:25}} source={require('../icons/kids.png')} />
                
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
  
  
    </Tab.Navigator>
    
    
    
  </NavigationContainer>
 
  

  
  )
  
}


export default Tabs;