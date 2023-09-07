import React from "react";
import {NavLink} from 'react-router-dom'

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar_list'>
                <NavLink to ="/">
                  Home
                </NavLink>
                <NavLink to="/products">
                    Products
                </NavLink>
                <NavLink to="/articles">
                    Articles
                </NavLink>
                <NavLink to="/admin">
                    Admin
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
