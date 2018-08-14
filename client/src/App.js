import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Nav from "./components/Nav"
import Signup from './components/Signup';
import Cover from './components/Cover'
import Plats from "./components/Plats"
import Cart from './components/Cart'



class App extends Component {
  render() {
    return (
      
      <BrowserRouter >
      <div>
       <Nav />
        <div className="App">
        <Route exact path="/" component={Cover}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/plats" component={Plats}/>
        
        </div>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
