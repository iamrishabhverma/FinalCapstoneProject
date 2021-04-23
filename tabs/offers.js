import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import MarqueeText from 'react-native-marquee';

const profile = ({navigation}) => {

  const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
 
   ]
  return (
    
      <ScrollView>
      <Card style={styles.card}>
  <Card.Title>SAVE80</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>Get 80% off</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/eh3.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/bh2.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/bh3.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Get 80% off on 3rd corporate meetings'
      onPress={() => navigation.navigate('admin')}  />
</Card>

<Card style={styles.card}>
  <Card.Title>STAFF DISCOUNT</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}>FLAT FOR STAFF</Text> <Text  style={{fontStyle:'italic'}}>** Conditions apply</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/eh1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/sh1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/bh1.png')}>
  </Card.Image>
  </ScrollView>
  <Button
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Get Flat prices for Staff family/friends/hostings.No City Tax :4% and HST :13%' />
</Card>


<Card style={styles.card}>
  <Card.Title>KIDSEC</Card.Title>
  <Card.Divider/>
  <Text style={{marginBottom: 10}}>
      <Text style={{fontWeight: 'bold',fontSize:33}}></Text> <Text  style={{fontStyle:'italic'}}>We offer a different Kids section. Enjoy your parties to fullest. Add anything if you want</Text>
    </Text>
    <ScrollView style={{height:200,}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/wh1.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/sh2.png')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/wh2.png')}>
  </Card.Image>
  </ScrollView>
  
</Card>


      </ScrollView>
    
  )
}
export default profile;

const styles = StyleSheet.create({
    
back: {
  flex:1,
  width:200,
  height:100,
  backgroundColor: 'grey',
},    
card:{
borderRadius:50,
borderWidth:1,
},
});