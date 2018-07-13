import React, { Component } from 'react';
import Sidebar from '../components/Sidebar.js';
import Main from '../components/Main.js';
import './App.css';
import store from '../store';
import _ from 'lodash';

class App extends Component {

  render() {
    const { contacts, user, activeUserId } = store.getState();

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
