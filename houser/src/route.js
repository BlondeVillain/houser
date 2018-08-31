import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header.js";
import House from "./component/House/House.js";
import Wizard from "./component/Wizard/Wizard.js";
export default function Routes(){
(
    <Switch>
  
        <Route component={House} exact path= '/House'/>
        <Route component={Wizard}  path='/wizard'/>
        <Route component={Header}  path="/header"/>
        <Route component={Dashboard}  path='/'/>

    </Switch>)}