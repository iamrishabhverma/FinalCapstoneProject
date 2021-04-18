import React from 'react';
import { SafeAreaView } from 'react-native';
import {Image ,Button,StyleSheet} from 'react-native';
import { View } from 'react-native';
import {Icon, Text,Card} from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {

    return(
        
            <ScrollView style={{backgroundColor: '#fff'}}>
        <ScrollView showsVerticalScrollIndicator style={styles.container}>
            
            <Text style={styles.container}>Let Us make it special</Text>
            <Text style={styles.container}> Celebrate with Us</Text>
            <View style={styles.container2}>
        <Button style={styles.quote} title="Request a Quote">Request a Quote</Button>
        
        </View>
        <SafeAreaView>
       
        </SafeAreaView>
       
        <Text style={{fontFamily:'DelaGothicOneRegular',fontStyle: 'italic',color:'blue',fontSize:20,marginHorizontal:50,}}>Occasions we offer</Text>
        <ScrollView scrollEventThrottle={100} style={styles.occasions} horizontal ={true} >
            
            <Image style={styles.wall} source={require('../images/wedding.png')}  /> 
            
            <ScrollView style={styles.occasions1} >
                
            <Image style={styles.wall} source={require('../images/babyshower.png')} /> 
            <Image style={styles.wall} source={require('../images/wall.png')} /> 
            <Image style={styles.wall} source={require('../images/wall.png')} /> 
            </ScrollView>
            <Image style={styles.wall} source={require('../images/babyshower.png')} /> 
            <Image style={styles.wall} source={require('../images/wall.png')} /> 
            <Image style={styles.wall} source={require('../images/wall.png')} /> 
        </ScrollView>
        <TextInput style={styles.searchbar} placeholder='   Search here...'></TextInput>
        
        <Text style={{fontFamily: 'Calibri', fontStyle: 'Bold',color:'blue',fontSize:20,marginHorizontal:50,alignItems:'center'}}>Our Halls</Text>
       <ScrollView style={{shadowOpacity:10,shadowColor:'#F1F1F1',shadowRadius:20,}} >
            
       <Card style={styles.card}>
  <Card.Title>NORTH HALL</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>Get 80% off</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='View' />
</Card>

<Card style={styles.card}>
  <Card.Title>SOUTH HALL</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>Get 80% off</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall4.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall3.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='View' />
</Card>

<Card style={styles.card}>
  <Card.Title>WEST HALL</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>Get 80% off</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/hall2.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall4.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall3.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='View' />
</Card>

<Card style={styles.card}>
  <Card.Title>EAST HALL</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>Get 80% off</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/hall1.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='View' />
</Card>

           </ScrollView>
           

      </ScrollView>
      
    
     </ScrollView>
     
      );
    
}
export default HomeScreen;

const styles = StyleSheet.create({
   container: {
       flex:1,
       fontWeight : 'bold',
       
       fontSize: 35,
       borderRadius : 2,
       color: '#2125F5',
       
       
   },
   container2: {
    borderRadius : 50,
    padding: 10,
    margin: 60,
    color: '#fff',
    backgroundColor : '#C9CAF5',
    },
    wall:{
        height:150,
        width: 150,
        borderRadius:100,
        justifyContent: 'space-between',
        margin:30,
        elevation: 30,
        shadowColor:'#000',
        shadowRadius:100,
    },
    walls:
    {
        flex:2,
        height:400,
        width: 350,
        borderRadius: 20,
        justifyContent: 'space-between',
        margin:30,
        elevation: 30,
        shadowColor:'#000',
        shadowRadius:100,
        flexDirection: 'column',
        
     
    },
    occasions:{
        height: 220,
    },
    occasions1:{
        
        elevation:2,
    },
    searchbar:{
        borderBottomColor:'black',
        width: 'auto',
        height:50,
        marginLeft:20,
        marginRight:20,
        borderColor:'black',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:50,
        marginBottom:40,
        
        
    },
    card:{
        borderRadius:50,
        borderWidth:1,
        borderRadius:50,
        
        },
    
  });