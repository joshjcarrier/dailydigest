import React from 'react';
import {
  View,
} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapView initialRegion={{
        latitude: 47.620440,
        longitude: -122.347173,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      }} style={{ flex: 1 }} />
    );
  }
}
