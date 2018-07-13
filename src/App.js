import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Main from './Main.js';
import './App.css';
import store from './store';
import _ from 'lodash';

class App extends Component {

  render() {
    const { contacts } = store.getState();

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
