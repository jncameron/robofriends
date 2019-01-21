import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './components/CardList';

class App extends Component {

  render() {
    return (
      <div>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
