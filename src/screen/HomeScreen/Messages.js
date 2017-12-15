import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button, Text} from 'native-base';
import { FooterBottom } from '../../components';


class Messages extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{color: tintColor}} />
    ),
     }
  
render() {
    return (
      <Container>
        
          <View style={{flex:1}}>
             <Text style={styles.stats}>
          You have  No messages
        </Text>
		
       </View>
        <FooterBottom />
        </Container>
      
    );
}
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
    stats: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Messages;