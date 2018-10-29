import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import HomePage from '../src/components/Home/Home'; 
import Ideas from '../src/components/Ideas/Ideas';
import AddIdeas from '../src/components/AddIdea/AddIdea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact path="/"
              component={HomePage}
            />
            <Route
              exact path="/ideas"
              component={Ideas}
            />
             <Route render={() => <h1>404: Page Not Found</h1>} />
          </Switch>
        </Router>
      </div>
          );
        }
      }
      
      export default App;
