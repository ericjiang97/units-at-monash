import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class App extends React.Component {
  constructor(){
    super();
  }

  render() {

    return (
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Copyright (C) 2017 Eric Jiang.</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
  }
}
