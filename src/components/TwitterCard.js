import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
const Item = Picker.Item;
const TwitterCard = () => {

    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../assets/images/wd.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                 <UserDetails
                   titleText="Hack the Planet"
                   bodyText="Come and Enjoy the upcoming game of UBISOFT 'THE WATHCDOGS 2'. Be ready to h4ck 'em all"
                   twitterName='@HH'
                   lastSeenTime='10m ago'/>
               
          </Body>
          
             </Left>
           </CardItem>
           <CardItem cardBody>
                <Image source={require('../assets/images/wd2.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="ios-text-outline"/> 
                 <Icon color="#00aced"/>
                 <Text style={ styles.buttonTextStyle }>60</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="ios-git-compare" />
                <Icon color="#00aced"/>
                <Text style={ styles.buttonTextStyle } >2</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="ios-heart-outline" />
                 <Icon color="#00aced"/>
                 <Text style={ styles.buttonTextStyle }>19</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 <Icon color="#00aced"/>
                 </Button>


           </CardItem>
         </Card>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export { TwitterCard };