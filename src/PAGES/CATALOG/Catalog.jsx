    
    
    import React from "react";
    import {CatalogMenu} from "./Catalogmenu";
    import {Products} from "./Products"; 
    import {dataArtists} from "../../DATAS/Artists";
    

    function Catalog() {
        console.log(dataArtists)
        return (

        <>
            <div>
                <CatalogMenu/>
            </div>
            <div>
                 <Products dataArtists={dataArtists} /> 
            </div>
        
        </>
        );}

    export {Catalog}

    