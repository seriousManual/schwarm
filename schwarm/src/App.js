import React, { Component } from 'react';

import './App.css';
import List from './components/List.jsx'
import Form from './components/Form.jsx'

class App extends Component {
  render() {
    return (
      <div id="schwarm">
        <Form onChange={e => console.log( e)} />
        <List list={this.props.data} />
      </div>
    )
  }
}

export default App;