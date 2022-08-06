import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "../header/Header.module.css";



function Footer() {
    return (
        <div className={classes.content}>
            <ul>
                <li>
                    <NavLink className={classes.link} to="/new">NewPage</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/request">RequestPage</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
