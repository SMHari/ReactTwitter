import React, { Component } from "react";
import { Platform,StyleSheet } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2() {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Moments</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		
        <Text style={styles.stats}>
          You have created No moments
        </Text>
		
          
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

  stats: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});