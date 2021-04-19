import React, { useState } from 'react';
import {ScrollView, View,StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';

const SigninScreen = ({navigation})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Tabs');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>
    <ScrollView style={styles.signIn}>
        <Image style={styles.img} source={require('../icons/sign-in.png')} />
        <Input
            label="Username"
            value={name}
            onChangeText={setName}
        />
        <Input
            label="EmailID"
            value={email}
            onChangeText={setEmail}
        />
        <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <Button style={{width:300,marginLeft:22}} title="SignIn" onPress={() => signIn()} />
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text style={{width:300,marginLeft:22}}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        </ScrollView>
    </>
    
};

export default SigninScreen;


const styles = StyleSheet.create({
    
      signIn: {
     backgroundColor: '#F1F1F1',
     margin: 35,
     marginTop:50,
      },
     
     img:{
      height:100,
      width:100,
      justifyContent: 'center',
      marginHorizontal: 120,
      marginBottom: 100,
     },     
   });