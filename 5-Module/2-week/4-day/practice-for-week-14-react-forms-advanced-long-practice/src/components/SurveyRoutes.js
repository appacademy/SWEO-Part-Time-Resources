import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import Inventory from './Inventory';
import InventoryReport from './InventoryReport';
import SampleSurvey from './SampleSurvey';

const SurveyRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                {' '}|{' '}
                <NavLink to="/sample">Sample</NavLink>
                {' '}|{' '}
                <NavLink to="/inventory">Inventory</NavLink>
                {' '}|{' '}
                <NavLink to="/Report">Report</NavLink>
            </div>
            <Switch>
                <Route path="/sample">
                    <SampleSurvey />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route path="/report">
                    <InventoryReport />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default SurveyRoutes;
