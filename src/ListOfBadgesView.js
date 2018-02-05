// # first time
// location

import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';

class ListOfBadgesView extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {[
          {
            key: "First poop"
          },
          {
            key: "Frequent movements"
          },
        ].map((badge) => { return (
          <View style={{ borderColor: 'lightgrey', borderWidth: 1, width: '47%', height: 200 }}>
            <View style={{ flex: 1, backgroundColor: 'red', borderRadius: 100 }}>
              <Text>{badge.key}</Text>
            </View>
          </View>
        );})}
      </ScrollView>
    );
  }
}

export default ListOfBadgesView;
