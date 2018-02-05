import React from 'react';
import ActualApp from './src/App';

import serverconfig from './serverconfig.json'

export default class App extends React.Component {
  render() {
    return (
      <ActualApp
        graphqlEndpoint={serverconfig.graphqlEndpoint}
      />
    );
  }
}
