import React, { Component } from 'react';

import './App.css';
import List from './components/List.jsx'
import Form from './components/Form.jsx'

class App extends Component {
  constructor() {
    super()

    this.state = {
      search: '',
      noProtected: false,
      onlyCurrent: false
    }
  }

  render() {
    return (
      <div id="schwarm">
        <Form onSearch={searchValue => this.setState({search: searchValue})}
              onProtected={isProtected => this.setState({noProtected: isProtected})}
              onCurrent={isCurrent => this.setState({onlyCurrent: isCurrent})}
        />
        <List list={this.props.data} selection={this.state} />
      </div>
    )
  }
}

export default App;