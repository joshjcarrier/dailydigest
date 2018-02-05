import React from 'react';
import {
  StyleSheet,
  TabBarIOS,
  View,
  Text,
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HomeView from './HomeView';
import LoginView from './LoginView';

const allPoopsQuery = gql`
  query {
    allPoops(orderBy: createdAt_DESC) {
      id
      createdAt
      user {
        firstname
      }
    }
  }
`

class ListOfPoopsView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          {JSON.stringify(this.props.allPoopsQuery.allPoops, null, '  ')}
        </Text>
      </View>
    );
  }
}

export default graphql(allPoopsQuery, { name: 'allPoopsQuery' })(ListOfPoopsView)
