import { useState, useEffect } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
    const [keyNum, setKeyNum] = useState(0);

    useEffect(() => {
        const increase = () => setKeyNum((prev) => prev + 1);
        window.addEventListener('keypress', increase);

        return () => window.removeEventListener('keypress', increase);
    }, []);

    return (
        <nav>
            <div>Number of keystrokes: {keyNum}</div>
            <ul>
                <li>
                    <NavLink to="/" exact={true} activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact={true} activeClassName="active">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-up"
                        exact={true}
                        activeClassName="active"
                    >
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users" exact={true} activeClassName="active">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tweet" exact={true}>
                        Create A Tweet
                    </NavLink>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
