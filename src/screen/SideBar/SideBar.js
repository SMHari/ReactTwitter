import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from "native-base";
const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'ios-list-box'},{name: "Moments",icon: 'md-flash'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';
export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    userdetails = {
          username: 'Hariharan S',
          userid: '@Hari_S_10',
          following: 302,
          followers: 58,
          
        };
        console.log(userdetails + 'user');
  }
  render() {
    const {username, userid,thumbnail,following,followers} = userdetails;
    console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
              <View style = {{flex: 1,
        flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('../../assets/images/wd.jpg')} />
            
              
                
                  <Text style={{fontWeight: 'bold'}}>{username}</Text>
                  <Text note>{userid}</Text>
                  
              
            <View style = {{flexDirection: 'row'}} >
              <Text>{following} Following </Text>
                  <Text >{followers} Followers</Text>
                  </View>
                  </View>
             </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon
                  
                >
                <Left>
                <Icon name={data.icon}/>
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 10 }} name='ios-moon-outline'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='ios-qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}
