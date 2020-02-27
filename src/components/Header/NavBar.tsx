import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.css';
import logo from "../../assets/bblogo.gif"


export const NavBar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><img src={logo} alt="logo" />BoostBrain</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/users/"><i className="material-icons">people</i>Студенты</NavLink></li>
                    <li><NavLink to="/projects"><i className="material-icons">view_module</i>Проекты</NavLink></li>
                    <li><NavLink to="/tasks/"><i className="material-icons">assignment</i>Задания</NavLink></li>
                    <li><NavLink to="/messages/"><i className="material-icons">messages</i>Сообщения</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};
