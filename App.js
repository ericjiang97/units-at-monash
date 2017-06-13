import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
