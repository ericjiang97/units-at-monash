import React from 'react';
import Expo from 'expo';
import Fuzzy from "./utils/fuzzy.js"
import { ScrollView , StyleSheet, View, Text } from 'react-native';
import { List, ListItem, Spinner, Item, Input } from 'native-base';
import axios from "axios";
import UnitModal from "./UnitModal"
export default class Units extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        fetchReady: false, 
        data: [],
        results: [],
        search: ""
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

  search(text){
    this.setState({
        results: Fuzzy.search(text, this.state.data, 20, ["unitCode", "unitName"], 0.5 )
    })
  }

  render() {
    return (
        <ScrollView>
            <List>
                {this.state.fetchReady ?
                    <ListItem>
                        <Item regular>
                            <Input placeholder='Search for a unit...' onChangeText={this.search.bind(this)}/>
                        </Item>
                    </ListItem>
                    :
                    <ListItem>
                        <Text> Fetching Summary of Every Unit... </Text>
                        <Spinner color='blue' />
                    </ListItem>
                }
                {
                    this.state.results &&
                    this.state.results.map((item) => {
                        return <ListItem key={item.unitCode}><UnitModal unitCode={item.unitCode} unitName={item.unitName}/></ListItem>
                    })
                }


            </List>
        </ScrollView >
    );
  }
}
