import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
import { List, ListItem, Text,Spinner } from 'native-base';

export default class Units extends React.Component {
  constructor(){
    super(props);
    this.state = {
      fetchReady: false, 
      data: []
    };
  }

  componentDidMount() {
    fetch('https://monplan-api-dev.appspot.com/basic/units', {
        method: 'GET'
    })
    .then((response) => 
        this.setState({
            data: response
        })
    ).done(
        this.setState({
            fetchReady: true
        })
    )
  }

  render() {
    return (
        <List>
            {this.state.fetchReady ? this.state.data.map((item) => {
                        <ListItem>
                            <Text>{item.unitName}</Text>
                        </ListItem>
                        })
                :
                        <ListItem>
                            <Spinner color='blue' />
                        </ListItem>
            }
        </List>
    );
  }
}
