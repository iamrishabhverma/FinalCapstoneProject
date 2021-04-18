import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const profile = () => {

  const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
  return (
    
      <View style={styles.card}>
      
      </View>
    
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

},
});