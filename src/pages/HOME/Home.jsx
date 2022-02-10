import React from 'react';
import '../../styles/list.css';
import logo from '../../imagenes/logo.gif';
import {Carrusel} from './Carrusel';
import {Contacts} from '../../components/Contacts'


function Home() {
    return (
        
    <>
        <div className="logo">
            <img src={logo} alt="loguito"/>
        </div>

            <Carrusel/>
            <Contacts/>


    </>
    );}

export {Home}