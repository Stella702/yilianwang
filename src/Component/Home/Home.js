import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
import Top from '../Top/Top';
import Left from '../Left/Left';
// import Main from '../Main/Main';
import {  Route, Switch } from 'react-router-dom';
import './Home.css';
import ChooseGoods from '../ChooseGoods/ChooseGoods';
import GoodsList from '../GoodsList/GoodsList';
import Self from '../Self/Self';
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Top></Top>
        <div className="wrap">
          <div className="manWrap">
            <Left></Left>
            <Switch>
              <Route exact path="/home/choosegoods" component={ChooseGoods}>
              </Route>
              <Route path="/home/goodsList" component={GoodsList}>
              </Route>
              <Route path="/home/self" component={Self}>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
