import React, { useEffect, useState } from "react";
import "../../STYLES/products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {CartProducts} from './productCart';

const Products = ({ dataArtists }) => {

    return (

        <div className="products">
            {dataArtists.map((dataArtist, i ) => <CartProducts key={i} dataArtist={dataArtist}/>

            
            

        )}
        </div>
    );
};

export {Products};

