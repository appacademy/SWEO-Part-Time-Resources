import React from 'react';
import { State, NoState, Effect, NoEffect, SideEffect } from './components';
import { Route, NavLink, Switch } from 'react-router-dom';

const App = () => {
    return (
        <React.Fragment>
            <nav>
                <NavLink to="/state">State</NavLink>
                <NavLink to="/noState">NoState</NavLink>
                <NavLink to="/effect">Effect</NavLink>
                <NavLink to="/noEffect">NoEffect</NavLink>
                <NavLink to="/sideEffect">SideEffect</NavLink>
            </nav>
            <Switch>
                <Route path="/state">
                    <State />
                </Route>
                <Route path="/noState">
                    <NoState />
                </Route>
                <Route path="/effect">
                    <Effect />
                </Route>
                <Route path="/noEffect">
                    <NoEffect />
                </Route>
                <Route path="/sideEffect">
                    <SideEffect />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default App;
