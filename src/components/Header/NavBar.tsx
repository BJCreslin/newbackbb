import React from 'react';
import {NavLink} from "react-router-dom";


export const NavBar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/users/"><i className="material-icons">people</i>Users</NavLink></li>
                    <li><NavLink to="/projects"><i className="material-icons">view_module</i></NavLink></li>
                    <li><NavLink to="/tasks/"><i className="material-icons">assignment</i></NavLink></li>
                    <li><NavLink to="/messages/"><i className="material-icons">messages</i></NavLink></li>
                </ul>
            </div>
        </nav>
    )
};
