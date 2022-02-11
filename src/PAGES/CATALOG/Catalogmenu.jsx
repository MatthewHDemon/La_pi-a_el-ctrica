
    import React from "react";
    import { NavLink } from "react-router-dom";
    import '../../STYLES/Catalog_menu.css';
    
    function CatalogMenu() {
        return (
            <div className="catalog_menu_container">
                <h1>CATALOG</h1>
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

    export {CatalogMenu}