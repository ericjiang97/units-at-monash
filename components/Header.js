import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
import { Container, Content, ListItem, Text, CheckBox, Header } from 'native-base';

export default class Header extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <View>
        <Container>
            <Header>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        </Container>
      </View>
    );
  }
}
