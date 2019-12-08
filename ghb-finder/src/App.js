import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import { NavBar, About, Users, User, Search, Alert } from './components';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
