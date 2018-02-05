import React from 'react';
import { 
  Alert,
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
  _doTheThing = function () {
    Alert.alert("FOO", "totall works");
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
        <View style={{ flex: 1, padding: 16 }}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this._doTheThing()}>
              <Text style={{ fontSize: 32 }}>💩</Text>
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
