import React from 'react';
import {
  Alert,
  Animated,
  Button,   
  FlatList,
  Modal,
  StyleSheet, 
  TabBarIOS,  
  Text, 
  TouchableOpacity,
  View, 
} from 'react-native';
import MapView from 'react-native-maps';
import { LineChart } from 'react-native-svg-charts';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LoginView from './LoginView';

const addPoopMutation = gql`
  query {
    allUsers {
      id
      firstname
      username
    }
  }
`

class PoopButton extends React.Component {
  POOP_INITIAL_FONT_SIZE = 64;
  POOP_MAXIMUM_FONT_SIZE = this.POOP_INITIAL_FONT_SIZE + 100;

  state = {
    poopSize: new Animated.Value(this.POOP_INITIAL_FONT_SIZE),
  };

  _onPoopIn = () => {
    Animated.timing(this.state.poopSize, {
      toValue: this.POOP_MAXIMUM_FONT_SIZE,
      duration: 2000,
    }).start();
  }

  _onPoopOut = () => {
    let sizeOfPoop = (this.state.poopSize._value/this.POOP_MAXIMUM_FONT_SIZE)*100;
    this.props.onPoopPressed();
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(this.state.poopSize, {
        toValue: this.POOP_INITIAL_FONT_SIZE,
        duration: 20,
      })
    ]).start();
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        hitSlop={{ left: 8, top: 8, right: 8, bottom: 8 }}
        onPressIn={this._onPoopIn}
        onPressOut={this._onPoopOut}>
        <Animated.Text style={{ fontSize: this.state.poopSize }}>
          💩
        </Animated.Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default PoopButton;
