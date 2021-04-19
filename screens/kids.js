import React from 'react';
import { View, Text, Image,StyleSheet, ImageBackground } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import MarqueeText from 'react-native-marquee';


const kids = ({navigation}) => {

  const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
 
   ]
  return (
    
    <ImageBackground style={{width:400,height:800}} source={require('../images/back.png')} >
      <ScrollView  horizontal={true}>
       
      <ScrollView>

<Card >
  <Card.Title>TOYS FOR GIRLS</Card.Title>
  <Card.Divider/>
  
    <ScrollView style={{height:200}} >
  <Card.Image style={{marginBottom:10}} source={require('../images/kids.jpeg')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/kids.jpeg')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/kids.jpeg')}>
  </Card.Image>
  <Card.Image style={{marginBottom:10}} source={require('../images/kids.jpeg')}>
  </Card.Image>
  <Card.Divider/>
  <Text >
      <Text style={{fontWeight: 'bold',fontSize:33}}></Text> <Text  style={{fontStyle:'italic'}}>We offer a different Kids section. Enjoy your parties to fullest. Add anything if you want</Text>
    </Text>
  </ScrollView>
  
</Card>

</ScrollView>
      </ScrollView>
      </ImageBackground>
      
    
  )
}
export default kids;

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
marginTop: 50,
marginRight:50,
},
});