import React from 'react';
import Expo from 'expo';
import Footer from "./components/Footer";
import Units from "./components/Units"
import { StyleSheet, View } from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Button, Icon, Title, Body, Right } from 'native-base';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({isReady: true});
  }

  render() {
    
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <View>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Body>
                  <Title>Find a Unit</Title>
              </Body>
              <Right />
          </Header>
          <Units />
      </View>
    );
  }
}
