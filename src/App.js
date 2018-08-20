import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Component/Home/Home';
// import ChooseGoods from './Component/ChooseGoods/ChooseGoods';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
