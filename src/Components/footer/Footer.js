import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../header/Header.module.css";



function Footer() {
    return (
        <div className={classes.content}>
            <ul>
                <li>
                    <NavLink className={classes.link} to="/contact">ContactPage</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/count">CountPage</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/main">MainPage</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/user">UserPage</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
