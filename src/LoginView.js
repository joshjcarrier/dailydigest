import React from 'react';
import {
  Button,
  FlatList, 
  Text,
  View, 
} from 'react-native';

export default class LoginView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 32 }}>
        <Text style={{ fontSize: 42 }}>Users</Text>
        <FlatList
          data={[
            {key: 'Oliver' },
            {key: 'Qijin' },
            {key: 'Josh' },
          ]}
          renderItem={({item}) => {
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                <Text style={{ fontSize: 24 }}>
                  {item.key}
                </Text>
                <Button title="select" onPress={() => null} />
              </View>
          );
        }} />
      </View>
    );
  }
}