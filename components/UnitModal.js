import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { Button, Card, CardItem, Body, Spinner, Title, Icon } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from "axios";

export default class UnitModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            fetchReady: false,
            data: {}
        }
    }

    setModalVisible(visible) {
        this.setState({modalOpen: visible});
        this.showModal();
    }

    showModal(){        
        axios.get('https://monplan-api-dev.appspot.com/units/' + this.props.unitCode)
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
        <View style={{marginTop: 22}}>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.modalOpen}
                onRequestClose={() => {this.setModalVisible(!this.state.modalOpen)}}
                >
                    <ScrollView>
                        <Card style={{paddingTop: 20}}>
                            <CardItem header>
                                <Text>{this.props.unitCode + " - " + this.props.unitName}</Text>
                            </CardItem>
                            <Body>
                                {this.state.fetchReady ?
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Icon ios="ios-school" android="md-school" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Text>{this.state.data.description}</Text>
                                    </Row>
                                </Grid>
                                :
                                <CardItem>
                                    <Text> Loading... </Text>
                                    <Spinner color='blue' />
                                </CardItem>
                                }
                            </Body>
                            
                            <Button primary onPress={() => {
                                    this.setModalVisible(!this.state.modalOpen)
                                }}>
                                <Text>Hide Modal</Text>
                            </Button>
                        </Card>
                </ScrollView>    
            </Modal>

            <TouchableHighlight primary onPress={() => {
                        this.setModalVisible(true)
                    }}
                    style={{marginTop: 22}}>
                    <Text>{this.props.unitCode + " - " + this.props.unitName}</Text>
            </TouchableHighlight>

        </View>
        );
    }
}