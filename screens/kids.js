import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  name: 'brynn',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
};

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96 }}>Games.....</Text>
    <Image source={require('../images/1.jpg')} />
    <Image source={require('../images/2.jpg')} />
    <Image source={require('../images/3.jpg')} />
    <Image source={require('../images/4.jpg')} />
   
    <Text style={{ fontSize: 96 }}>Toddlers Toys</Text>
    <Image source={require('../images/todller1.jpg')} />
    <Image source={require('../images/toddler2.jpg')} />
    <Image source={require('../images/toddler3.jpg')} />
    <Image source={require('../images/todller4.jpg')} />
    
    <Text style={{ fontSize: 96 }}>Toy Car</Text>
    <Image source={require('../images/car1.jpg')} />
    <Image source={require('../images/car2.jpg')} />
    <Image source={require('../images/car3.jpg')} />
    <Image source={require('../images/car4.jpg')} />
    
    <Text style={{ fontSize: 96 }}>Girls Toys</Text>
    <Image source={require('../images/girls1.jpg')} />
    <Image source={require('../images/girl2.jpg')} />
    <Image source={require('../images/girl3.jpg')} />
    <Image source={require('../images/girls4.jpg')} />
    

  </ScrollView>
);

export default App;