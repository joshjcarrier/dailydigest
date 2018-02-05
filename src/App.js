import React from 'react';
import RootView from './RootView';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    const httpLink = new HttpLink({ uri: props.graphqlEndpoint });
    this._client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });
  }

  render() {
    return (
      <ApolloProvider client={this._client}>
        <RootView />
      </ApolloProvider>
    );
  }
}
