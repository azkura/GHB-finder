import React, { Component } from 'react';
import './App.css';
import { NavBar, Users } from './components';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
