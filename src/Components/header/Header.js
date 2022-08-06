import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";



function Header() {
    return (
        <div className={classes.content}>
            <ul>
                <li>
                    <NavLink className={classes.link} to="/">ButtonPage</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/input">InputPage</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
