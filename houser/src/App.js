import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { hashrouter } from "react-router-dom";
import Routes from "./route.js";
import Header from "./../src/component/Header/Header";
import House from "./../src/component/House/House";
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <Header/>
          <House/>
          {/* <Routes/> */}
      </div>
    );
  }
}

export default App;
