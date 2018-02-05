import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 4, backgroundColor: 'red' }}>
          <Text>Background map thing</Text>
        </View>
        <View style={{ flex: 8, backgroundColor: 'blue' }}>
          <Text>Live tracking goes here</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'orange' }}>
            <Button title='💩' onPress={() => null} />
        </View>
        <View style={{ flex: 1}}>
          <Text>Navigation goes here</Text>
        </View>
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
