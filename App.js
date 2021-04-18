import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import Tabs from './screens/tabs';
import admin from './admin/admin';

const stackNavigator = createStackNavigator({
   //Signup : SignupScreen,
   //Signin: SigninScreen, 
   //Home: HomeScreen,
   Tabs: Tabs,
   admin: admin
});

const App = createAppContainer(stackNavigator);

export default App;