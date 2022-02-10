
    import React from "react";
    import { NavLink, Outlet } from "react-router-dom";
    import '../../styles/Catalog_menu.css';
    function Catalog_menu() {
        return (
            <div className="catalog_menu_container">
                <h1>CATALOG</h1>
                <Outlet/>
                <ul className="catalog_menu_content">
                    <li>
                        <NavLink to="" style={{textDecoration:"none"}}>
                        <h3>ARTISTAS</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" style={{textDecoration:"none"}} >
                        <h3>ORIGINALES</h3>
                        </NavLink>
                    </li> 
                </ul>

            </div>
        );

    }

    export {Catalog_menu}