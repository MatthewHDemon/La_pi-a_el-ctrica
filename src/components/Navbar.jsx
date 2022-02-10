import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faTshirt, faHome }  from '@fortawesome/free-solid-svg-icons';

import "../styles/list.css";

function Navbar() {
    return (
        <div className="container">
            <Outlet/>
            <ul className="List">
                <li>
                    <NavLink to="/catalog">
                    <FontAwesomeIcon style={{color:"#F81196", fontSize:"60px"}} icon={faTshirt}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                    <FontAwesomeIcon style={{color:"#F81196", fontSize:"65px"}}  icon={faHome}/>  
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                    <FontAwesomeIcon style={{color:"#F81196", fontSize:"65px"}} icon={faShoppingBag}/>
                    </NavLink>
                </li>
            </ul>

        </div>
    );

}

export {Navbar}