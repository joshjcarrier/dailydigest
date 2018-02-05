import React from 'react';
import {
  Alert,
  Animated,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { LineChart } from 'react-native-svg-charts';
import PoopButton from './PoopButton';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poopCompleteVisible: false,
    };
  }

  _onPoopSummaryClose = function () {
    this.setState({ poopCompleteVisible: false });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          transparent={true}
          visible={this.state.poopCompleteVisible}
          animationType={'fade'}
          onRequestClose={() => this._onPoopSummaryClose()} >
          <View style={{ flex: 1, margin: 32, backgroundColor: 'white' }}>
            <View style={{ padding: 16 }}>
              <Button
                onPress={() => this._onPoopSummaryClose()}
                title="Close modal">
              </Button>
              <Text style={{ fontSize: 54 }}>Herro</Text>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 4, backgroundColor: 'red' }}>
          <MapView initialRegion={{
            latitude: 47.620440,
            longitude: -122.347173,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }} style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 8 }}>
          <Text>{ JSON.stringify(this.props.users) }</Text>
          <FlatList
            data={[
              { key: 'Facebook', stats: [1, 2, 3, 4, 5] },
              { key: 'Google', stats: [5, 3, 1, 3, 5] },
              { key: 'UBC', stats: [5, 4, 3, 2, 1] },
            ]}
            renderItem={({ item }) => {
              return (
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                  <Text style={{ textAlign: 'center', padding: 32 }}>
                    {item.key}
                  </Text>
                  <LineChart dataPoints={item.stats} style={{ height: 50 }} svg={{ stroke: '#795548' }} showGrid={false} />
                </View>
              );
            }} />
        </View>
        <View style={{ flex: 2, padding: 16, alignContent: 'center', justifyContent: 'center' }}>
          <PoopButton
            onPoopPressed={this._onPoopPressed}
            userID={null /* TODO JOSHJCARRIER LOOKIE HERE */}
          />
        </View>
      </View>
    );
  }
}
