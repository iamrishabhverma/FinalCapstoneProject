import React, { useState } from 'react';
import { ScrollView,View,StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Input, Text,Image } from 'react-native-elements';
import firebase from '../firebase/fire';

const SignupScreen = ({ navigation }) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
            navigation.navigate('Signin');
        } catch (err) {
            setError(err.message);
        }

    }
    return <>
    <ScrollView>
    
    <View style={styles.signUp}>

    
    <Image style={styles.img} source={require('../icons/sign-up.png')} />
    <Input 
            label="First Name"
            value={fname}
            onChangeText={setFname}
        />
        <Input 
            label="Last Name"
            value={lname}
            onChangeText={setLname}
        />
        
        <Input 
            label="Username"
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
        <Button style={{width:300,marginLeft:22}} title="SignUp" onPress={() => signUp()} />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={{width:300,marginLeft:22}}>Already have an account? Sign In</Text>
        </TouchableOpacity>
        
        </View>
        </ScrollView>
    </>
    
};

export default SignupScreen;


const styles = StyleSheet.create({
    
    signUp: {
   
   margin: 35,
   marginTop:50,
    },
   signupbg:{
   margin:0,
   height:810,
   },
   img:{
    height:100,
    width:100,
    justifyContent: 'center',
    marginHorizontal: 120,
    marginBottom: 100,
   },     
 });