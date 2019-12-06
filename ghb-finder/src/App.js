import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { NavBar, Users } from './components';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_GHB_CLIENT_SECRET);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GHB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GHB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
