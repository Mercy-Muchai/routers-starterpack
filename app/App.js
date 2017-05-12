import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
        <IndexRoute component={Home} />
        <Route path='/address' component={Address} />
        <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1> Hello World! </h1>
const Address = () => <h1> We are located at Kindaruma Road </h1>
const NotFound = () => <h1> This page is not found! </h1>
const Nav = () => <div>
  <Link to='/'>Home</Link>&nbsp;
  <Link to='/address'>Address</Link>
  </div>
const Container = (props) => <div> <Nav /> {props.children} </div>
