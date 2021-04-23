import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon} from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

const profile = () => {

  const users = [
    {
      // name: 'brynn',
      // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
  return (
    
      <View style={styles.container} >
      
        <View style={styles.header}>
            <View style={styles.headerContent}>
                 <Image style={{height:200,width:200,borderRadius:60}} source={require('../icons/profile.jpeg')} />
                
                  
                <Text style={styles.name}>Rishabh Verma </Text>
                <Text style={styles.userInfo}></Text>
                <Text style={styles.userInfo}> </Text>
            </View>

              <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home Address</Text>
                <TextInput style={styles.inn}
                placeholder="Etobicoke,ON,M9W1N1"></TextInput>
                
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/phone-icon.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Phone</Text>
                <TextInput style={styles.inn}>1112224444</TextInput>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/128/red-mail-icon.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info} >Email</Text>
                <TextInput style={styles.inn}>management@teamearth.com</TextInput>
              </View>
            </View>
          <Text style={{opacity:0.50,paddingTop:70}}>Copyright@Team Earth 2021</Text>
           
      </View>
      </View>
     </View>
  )
}
export default profile;

const styles = StyleSheet.create({
    
back: {
  flex:1,
  width:200,
  height:100,
  backgroundColor: 'skyblue',
},    
header:{
 alignItems:'center',
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom:10,
    alignItems:'center',
    marginTop:15,
  },
    name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    alignItems:'center'
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
    alignItems:'center'
  },
    body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
    
  },
  inn:{
    textDecorationLine:'underline',
    backgroundColor:"#ECF1F0",
    width:150,
    height:30,
    alignContent:'center',
  }
});