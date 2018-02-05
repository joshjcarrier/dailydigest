import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  TabBarIOS,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HomeView from './HomeView';
import LoginView from './LoginView';
import ListOfPoopsView from './ListOfPoopsView';
import ListOfBadgesView from './ListOfBadgesView';

const allUsersQuery = gql`
  query {
    allUsers {
      id
      firstname
      username
    }
  }
`

class RootView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      users: null,
      selectedTab: 'home',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.allUsersQuery.loading && !nextProps.allUsersQuery.error) {
      this.setState({
        users: nextProps.allUsersQuery.allUsers,
      });
    }
  }

  componentWillMount = async function() {
    const userId = await AsyncStorage.getItem('@session:userId')
    this.setState({ userId });
  }

  _isTabSelected = function(tab) {
    return this.state.selectedTab === tab;
  }

  _onLoginComplete = function (userId) {
    this.setState({ userId });
  }

  _onPressTab = function (tab) {
    this.setState({ selectedTab: tab });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabBarIOS>
          <TabBarIOS.Item title='Home' systemIcon='featured' selected={this._isTabSelected('home')} onPress={() => {this._onPressTab('home');}}>
            <HomeView 
              users={this.state.users}
              userId={this.state.userId}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item title='Me' systemIcon='contacts' selected={this._isTabSelected('me')} onPress={() => { this._onPressTab('me'); }}>
            <ListOfBadgesView />
          </TabBarIOS.Item>
          <TabBarIOS.Item title='Groups' systemIcon='favorites' badge={1} selected={this._isTabSelected('groups')} onPress={() => { this._onPressTab('groups'); }}>
            <ListOfPoopsView />
          </TabBarIOS.Item>
          <TabBarIOS.Item title='Settings' systemIcon='more' selected={this._isTabSelected('settings')} onPress={() => { this._onPressTab('settings'); }}>
            <LoginView 
              onLoginComplete={(userId) => this._onLoginComplete(userId)}
              userId={this.state.userId} />
          </TabBarIOS.Item>
        </TabBarIOS>
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

export default graphql(allUsersQuery, { name: 'allUsersQuery' })(RootView)
