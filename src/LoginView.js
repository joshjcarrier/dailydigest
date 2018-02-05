import React from 'react';
import {
  AsyncStorage,
  Button,
  FlatList, 
  Text,
  View,
  ScrollView, 
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const allUsersQuery = gql`
  query {
    allUsers {
      id
      firstname
      username
    }
  }
`

LoginView = class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.allUsersQuery.loading && !nextProps.allUsersQuery.error) {
      this.setState({
        users: nextProps.allUsersQuery.allUsers,
      });
    }
  }

  _onLoginPress = async function(userId) {
    return await AsyncStorage.setItem('@session:userId', userId, () => {
      this.props.onLoginComplete(userId);
    });
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 32 }}>
        <Text style={{ fontSize: 42 }}>Users</Text>
        <ScrollView>
          {this.state.users.map((item) => {return (
            <View 
              key={item.id} 
              style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingVertical: 8, 
                borderBottomWidth: 1, 
                borderBottomColor: 'lightgrey' 
              }}>
              <Text style={{ fontSize: 24 }}>
                {item.firstname}
              </Text>
              <Button 
                title="log in" 
                onPress={() => this._onLoginPress(item.id)}
                disabled={ item.id == this.props.userId } />
          </View>
          );})}
        </ScrollView>
      </View>
    );
  }
}

export default graphql(allUsersQuery, {name: 'allUsersQuery'})(LoginView)
