import React from 'react';
import { 
  Alert,
  Animated,
  Button,   
  FlatList,
  StyleSheet, 
  TabBarIOS,  
  Text, 
  TouchableOpacity,
  View, 
} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  POOP_INITIAL_FONT_SIZE = 64;
  POOP_MAXIMUM_FONT_SIZE = this.POOP_INITIAL_FONT_SIZE + 100;

  constructor(props) {
    super(props);
    this.state = { poopSize: new Animated.Value(this.POOP_INITIAL_FONT_SIZE) };
  }

  _onPoopIn = function () {
    Animated.timing(this.state.poopSize, {
      toValue: this.POOP_MAXIMUM_FONT_SIZE,
      duration: 2000,
    }).start();
  }

  _onPoopOut = function () {
    let sizeOfPoop = (this.state.poopSize._value/this.POOP_MAXIMUM_FONT_SIZE)*100;
    debugger
    Alert.alert("Poop completed", `${sizeOfPoop}% of maximum size`)
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
      <View style={{ flex: 1}}>
        <View style={{ flex: 4, backgroundColor: 'red' }}>
          <MapView initialRegion={{
            latitude: 47.620440,
            longitude: -122.347173,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }} style={{ flex: 1}}/>
        </View>
        <View style={{ flex: 8 }}>
          <FlatList
            data={[
              {key: 'Facebook'},
              {key: 'Google'},
              {key: 'UBC'},
            ]}
            renderItem={({item}) => {
              return (
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                  <Text style={{ textAlign: 'center', padding: 32 }}>
                    {item.key}
                  </Text>
                </View>
              );
             }} />
        </View>
        <View style={{ flex: 2, padding: 16, alignContent: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center' }} hitSlop={{ left: 8, top: 8, right: 8, bottom: 8 }} onPressIn={() => this._onPoopIn()} onPressOut={() => this._onPoopOut()}>
              <Animated.Text style={{ fontSize: this.state.poopSize }}>💩</Animated.Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1}}>
          <TabBarIOS>
            <TabBarIOS.Item title='Home' systemIcon='featured' />
            <TabBarIOS.Item title='Me' systemIcon='contacts' />
            <TabBarIOS.Item title='Groups' systemIcon='favorites' badge={1} />
            <TabBarIOS.Item title='Settings' systemIcon='more' />
          </TabBarIOS>
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
