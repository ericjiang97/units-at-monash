import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
import { List, ListItem, Text,Spinner } from 'native-base';
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
    .then((response) => 
        this.setState({
            data: response.data,
            fetchReady: true
        })
    )
    .catch(err => {
        throw err;
    })
  }

  render() {
    return (
        <List>
            {this.state.fetchReady && 
                this.state.data.map((item) => {
                    <ListItem key={item.unitCode}>
                        <Text>{item.unitName}</Text>
                    </ListItem>
                })
            }
            {!this.state.fetchReady & !this.state.error &&
                        <ListItem>
                            <Spinner color='blue' />
                        </ListItem>
            }
            {(this.state.fetchReady &  this.state.error) &&
                        <ListItem>
                            <Text>An Error has Occured</Text>
                        </ListItem>
            
            
            } 


        </List>
    );
  }
}
