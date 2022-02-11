    
    
    import React from "react";
    import { NavLink, Outlet } from "react-router-dom";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faShoppingBag, faTshirt, faHome }  from '@fortawesome/free-solid-svg-icons';
    import "../STYLES/list.css";

    function Navbar() {
        return (
            <div className="container">
                <Outlet/>

                {/* Box that contains the icons of our three routes */}
                <ul className="List">
                    <li>
                        {/* Route that transport us to the page "Catalog" */}
                        <NavLink to="/catalog" className="catalog">
                        <FontAwesomeIcon  icon={faTshirt}/>
                        </NavLink>
                    </li>
                    <li>
                        {/* Route that transport us to the page "Home" */}
                        <NavLink to="/" className="home">
                        <FontAwesomeIcon  icon={faHome}/>  
                        </NavLink>
                    </li>
                    <li>
                        {/* Route that transport us to the page "Bag" */}
                        <NavLink to="/cart" className="bag">
                        <FontAwesomeIcon  icon={faShoppingBag}/>
                        </NavLink>
                    </li>
                </ul>

            </div>
        );

    }

    export {Navbar}