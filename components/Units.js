import React from 'react';
import Expo from 'expo';
import { ScrollView , StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Spinner } from 'native-base';
import axios from "axios";

export default class Units extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fetchReady: false, 
      data: [],
      error: false
    };
  }

  componentDidMount() {
    axios.get('https://monplan-api-dev.appspot.com/basic/units')
    .then((response) => {
            this.setState({
                data: response.data,
                fetchReady: true
            })
        }
    )
    .catch(err => {
        throw err;
    })
  }

  render() {
    return (
        <ScrollView>
            <List>
                {this.state.fetchReady ? 
                    this.state.data.map((item) => {
                    return(<ListItem key={item.unitCode}>
                            <Text>{item.unitCode + " - " + item.unitName}</Text>
                        </ListItem>)
                    })
                    :
                    <ListItem>
                        <Spinner color='blue' />
                    </ListItem>
                }


            </List>
        </ScrollView >
    );
  }
}
