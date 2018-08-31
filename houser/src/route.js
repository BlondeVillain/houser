import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./component/Dashboard/Dashboard.js";
import Wizard from "./component/Wizard/Wizard.js";
import {hashrouter} from 'react-router-dom';

    export default <Switch>

        <Route component={Wizard}  path='/wizard'/>
        <Route component={Dashboard}  path='/'/>

    </Switch>