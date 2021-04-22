//import React, { Component } from 'react';
import React, { useState } from 'react'
import { ImageBackground, SafeAreaView } from 'react-native';
import { Image, Button, StyleSheet } from 'react-native';
import { View,Linking } from 'react-native';
import {Form} from 'reactstrap';
import { Icon, Text, Card } from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import admin from '../admin/admin';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../screens/tabs';
import { Input } from 'react-native-elements/dist/input/Input';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';





function HomeScreen({ navigation }) {



    return (

        <ScrollView style={{ backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator style={styles.container} >
            <ImageBackground style={{width:400,height:700}} source={require('../images/party.png')} >
                <Text style={styles.container}>Let Us make it special</Text>
                <Text style={styles.container}> Celebrate with Us</Text>
                <View style={styles.container2}>
                    <Button style={styles.quote} title="Request a Quote"
                        onPress={() => navigation.navigate('quote')}>Request a Quote</Button>

                </View>
                </ImageBackground>
                

                <Text style={{ fontFamily: 'DelaGothicOneRegular', fontStyle: 'italic', color: 'blue', fontSize: 20, marginHorizontal: 50, }}>Occasions we offer</Text>
                <ScrollView scrollEventThrottle={100} style={styles.occasions} horizontal={true} >

                    <Image style={styles.wall} source={require('../images/wedding.png')} />

                    <ScrollView style={styles.occasions1} >

                        <Image style={styles.wall} source={require('../images/babyshower.png')} />
                        <Image style={styles.wall} source={require('../images/wh1.png')} />
                        <Image style={styles.wall} source={require('../images/sh1.png')} />
                    </ScrollView>
                    <Image style={styles.wall} source={require('../images/babyshower.png')} />
                    <Image style={styles.wall} source={require('../images/bh1.png')} />
                    <Image style={styles.wall} source={require('../images/eh1.png')} />
                </ScrollView>
                <TextInput style={styles.searchbar} placeholder='   Search here...'></TextInput>

                <Text style={{ fontStyle: 'Bold', color: 'blue', fontSize: 20, marginHorizontal: 50, alignItems: 'center' }}>Our Halls</Text>
                <ScrollView style={{ shadowOpacity: 10, shadowColor: '#F1F1F1', shadowRadius: 20, }} >

                    <Card style={styles.card}>
                        <Card.Title>NORTH HALL</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>!!</Text> <Text style={{ fontStyle: 'italic', fontSize: 20 }}>Birthday Parties</Text>
                        </Text>
                        <ScrollView style={{ height: 200, }} >
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh1.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh2.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh3.png')}>
                            </Card.Image>
                        </ScrollView>
                        <Button

                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='View'
                            onPress={() => navigation.navigate('North')} />
                    </Card>

                    <Card style={styles.card}>
                        <Card.Title>SOUTH HALL</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Best Suitable For!!</Text> <Text style={{ fontStyle: 'italic', fontSize: 20 }}>Wedding functions</Text>
                        </Text>
                        <ScrollView style={{ height: 200, }} >
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh1.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh2.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh3.png')}>
                            </Card.Image>
                        </ScrollView>
                        <Button

                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='View' onPress={() => navigation.navigate('South')} />
                    </Card>

                    <Card style={styles.card}>
                        <Card.Title>WEST HALL</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>!!</Text> <Text style={{ fontStyle: 'italic', fontSize: 20 }}>Professional Meetings</Text>
                        </Text>
                        <ScrollView style={{ height: 200, }} >
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh1.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh2.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh3.png')}>
                            </Card.Image>
                        </ScrollView>
                        <Button

                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='View' onPress={() => navigation.navigate('West')} />
                    </Card>

                    <Card style={styles.card}>
                        <Card.Title>EAST HALL</Card.Title>
                        <Card.Divider />
                        <Text style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Specially for!!!</Text> <Text style={{ fontStyle: 'italic', fontSize: 20}}>Kids</Text>
                        </Text>
                        <ScrollView style={{ height: 200, }} >
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh1.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh2.png')}>
                            </Card.Image>
                            <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh3.png')}>
                            </Card.Image>
                        </ScrollView>
                        <Button

                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='View' onPress={() => navigation.navigate('East')} />
                        <Card.Divider />
                        <Card.Divider />
                        <Card.Divider />
                        <Card.Divider />
                    </Card>

                </ScrollView>


            </ScrollView>





        </ScrollView>

    );

}
function DetailsScreen({ navigation }) {
    return (
        <ScrollView >
            <Card style={styles.card}>
                <Card.Title>NORTH HALL</Card.Title>
                <ScrollView style={{ height: 300, }} >
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh1.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh2.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh3.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/bh4.png')}>
                    </Card.Image>
                </ScrollView>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $500/Birthday Party With Decoration and Cake</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $300/Birthday Party Without Decoration and Cake </Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $700/Birthday Party With Decoration,Cake,Games,Food</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>North Hall for: </Text> <Text style={{ fontStyle: 'italic' }}>          BirthDay Party</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Capacity: </Text> <Text style={{ fontStyle: 'italic' }}>             Space for 50 people</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Special Arrangement for Sitting: </Text> <Text style={{ fontStyle: 'italic' }}>         No</Text>
                </Text>
                <Card.Divider />
                <Button

                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Book Now' onPress={() => navigation.navigate('Booking North Hall')} />
            </Card>
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
        </ScrollView>
    );
}


function SouthHall() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Title>SOUTH HALL</Card.Title>
                <ScrollView style={{ height: 300, }} >
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh1.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh2.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh3.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/sh4.png')}>
                    </Card.Image>
                </ScrollView>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $1000/Wedding Ceremony</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $500/Wedding Receiption</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $700/Wedding Engagement</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>South Hall for: </Text> <Text style={{ fontStyle: 'italic' }}>        Wedding Ceremony, Receiption, Enagement</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Capacity: </Text> <Text style={{ fontStyle: 'italic' }}>       Space for 100 people</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Special Arrangement for Sitting: </Text> <Text style={{ fontStyle: 'italic' }}>       Yes</Text>
                </Text>
                <Card.Divider />
                <Button

                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Book Now' />
            </Card>
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
        </ScrollView>
    );
}


function EastHall() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Title>EAST HALL</Card.Title>
                <ScrollView style={{ height: 300, }} >
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh1.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh2.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh3.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/eh4.png')}>
                    </Card.Image>
                </ScrollView>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $400/Birthday Party With Games</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $300/Birthday Party Without Games</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $700/Birthday Party With Games,Cake,Decoration and Cartoon Character</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>South Hall for: </Text> <Text style={{ fontStyle: 'italic' }}>        Kids Birthday Parties</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Capacity: </Text> <Text style={{ fontStyle: 'italic' }}>       Space for 30 people</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Special Arrangement for Sitting: </Text> <Text style={{ fontStyle: 'italic' }}>       Yes</Text>
                </Text>
                <Card.Divider />
                <Button

                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Book Now' />
            </Card>
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
            <Card.Divider />
        </ScrollView>
        );
}

function WestHall() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Title>WEST HALL</Card.Title>
                <ScrollView style={{ height: 300, }} >
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh1.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh2.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh3.png')}>
                    </Card.Image>
                    <Card.Image style={{ marginBottom: 10 }} source={require('../images/wh4.png')}>
                    </Card.Image>
                </ScrollView>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $300/Meetings</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $300/Conference</Text>
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}> Starting from $500/Seminars </Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>South Hall for: </Text> <Text style={{ fontStyle: 'italic' }}>        Meetings, Conference,Seminar</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Capacity: </Text> <Text style={{ fontStyle: 'italic' }}>       Space for 25 people</Text>
                </Text>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Special Arrangement for Sitting: </Text> <Text style={{ fontStyle: 'italic' }}>       Yes</Text>
                </Text>
                <Card.Divider />
                <Button

                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Book Now' />
                <Card.Divider />
                <Card.Divider />
                <Card.Divider />
                <Card.Divider />
            </Card>
        </ScrollView>
        );
}


function NBooking() {
    return (
        <ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your First name"
                    maxLength={20}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Last name"
                    maxLength={20}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Email"
                    maxLength={20}
                />
            </View>
            
            
        </ScrollView>
    );
}

function quoteRequest() {

    const [Id,setId] = React.useState();
    const [Name,setName] = React.useState();
    const [Position,setPosition] = React.useState();
    const [users,setUser] = React.useState();

    const saveUsers= () => {
        alert('Thank You! ' + Name + ' for requesting a quote. We will provide your further details as soon as we posibly can.');
    }
    const deleteUsers= () => {
        alert('delete');
    }
   
    
    
    return (

        <ScrollView>
             <View style={styles.inputContainer}>
        <Icon  name='user' type='font-awesome' color='blue' />
            <Text style={{fontSize: 30,textAlign:"center"}}> Your Information</Text>
            
            <TextInput
                //style={styles.textInput}
                placeholder="Your Name"
                maxLength={20}
                value={Name}
                onChangeText={(text) =>setName(text)}
            />
            <ScrollView style={{textAlign: "center"}} horizontal={true}>
            <TextInput
                style={{textAlign: "center"}}
                placeholder="Mobile Number"
                maxLength={20}
                value={Position}
                onChangeText={(text) =>setPosition(text)}
            />
            
            </ScrollView>
            <ScrollView horizontal={true}>
            <Text>Your Email: </Text>
            <TextInput
                
                 placeholder="Your Email ID"
                maxLength={20}
            />
            </ScrollView>
        <ScrollView>
        <Text >Event: </Text>
         <RNPickerSelect
         
          placeholder={{label: "Select Event Type..."}} onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Wedding', value: 'wedding' },
                { label: 'Birthday', value: 'birthday' },
                { label: 'Gala Dinner', value: 'gala_dinner' },
                { label: 'Musical Event', value: 'musical_event' },
                { label: 'Seminar', value: 'seminar' },
                { label: 'Corporate Party', value: 'corp' },
                { label: 'Corporate Meeting', value: 'corp_meet' },
                { label: 'Corporate Anniversery', value: 'corp_anni' },

            ]}
        />
        <Text >Hall Type: </Text>
        <RNPickerSelect
         
         placeholder={{label: "Select Event Type..."}} onValueChange={(value) => console.log(value)}
           items={[
               { label: 'North Hall', value: 'wedding' },
               { label: 'South Hall', value: 'birthday' },
               { label: 'West Hall', value: 'gala_dinner' },
               { label: 'East Hall', value: 'musical_event' },
               

           ]}
       />
       </ScrollView>
       
        
        
        <ScrollView horizontal={true}>
            <Text>Guests expected: </Text>
       <TextInput
                style={{marginLeft:20}}
                placeholder="Minimun"
                maxLength={20}
            />
       <Text>  -    </Text>
        <TextInput
                style={{marginLeft:5}}
                placeholder="Maximum"
                maxLength={20}
            />
           
          
            </ScrollView>
            <TextInput
           
           placeholder="Comments"
           maxLength={1000}/>
            <Button style={{padding:30,marginTop:100}}     title="Request a Quote"  onPress={saveUsers}  />
            
            </View>
            <Text h2 style={{margin:60,}}>Let us know How was your Experience!!!!</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Subject"
                maxLength={20}
            />
       
        <TextInput
                style={styles.textInput}
                placeholder="Body"
                numberOfLines= {20}
            />
            <Text>Terms and Conditions Apply</Text>
            <Text>
            57 packages are looking for funding
  run `npm fund` for details57 packages are looking for funding
  run `npm fund` for details
  57 packages are looking for funding
  run `npm fund` for details
  57 packages are looking for funding
  run `npm fund` for details
  57 packages are looking for funding
  run `npm fund` for details
  57 packages are looking for funding
  run `npm fund` for details
  v
  57 packages are looking for funding
  run `npm fund` for details7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details
  7 packages are looking for funding
  run `npm fund` for details

            </Text>
            
        
    </ScrollView>
      );
    
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="tabs" component={Tabs} />
                <Stack.Screen name="North" component={DetailsScreen} />
                <Stack.Screen name="South" component={SouthHall} />
                <Stack.Screen name="East" component={EastHall} />
                <Stack.Screen name="West" component={WestHall} />
                <Stack.Screen name="Booking North Hall" component={NBooking} />
                <Stack.Screen name="quote" component={quoteRequest} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App ;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        fontWeight: 'bold',

        fontSize: 35,
        borderRadius: 2,
        color: '#2125F5',


    },
    container2: {
        alignContent:'center',
        margin:60,
       // marginLeft:10,
        borderRadius:50,
        backgroundColor:'#BDCFFF',
        padding:10,
        color: '#fff',
        shadowColor: 'blue',
        shadowRadius:20,
        
        
    },
    wall: {
        height: 150,
        width: 150,
        borderRadius: 100,
        justifyContent: 'space-between',
        margin: 30,
        elevation: 30,
        shadowColor: '#000',
        shadowRadius: 100,
    },
    walls:
    {
        flex: 2,
        height: 400,
        width: 350,
        borderRadius: 20,
        justifyContent: 'space-between',
        margin: 30,
        elevation: 30,
        shadowColor: '#000',
        shadowRadius: 100,
        flexDirection: 'column',


    },
    occasions: {
        height: 220,
    },
    occasions1: {

        elevation: 2,
    },
    searchbar: {
        borderBottomColor: 'black',
        width: 'auto',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 40,


    },
    card: {
        borderRadius: 50,
        borderWidth: 1,
        borderRadius: 50,

    },
    inputContainer: {
        paddingTop: 15
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    signIn: {
        backgroundColor: '#F1F1F1',
        margin: 35,
        marginTop:50,
         },

});