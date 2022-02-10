import React from 'react';
import "../../styles/carrusel_home.css";
import foto1 from '../../imagenes/foto1.jpg';
import foto2 from '../../imagenes/foto2.jpg';
import foto3 from '../../imagenes/foto3.jpg';

    function  Carrusel() {

        /* const carrusel = document.querySelector(".carrusel-items");

        let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
        let intervalo = null;
        let step = 1;
        const start = () => {
            intervalo = setInterval(function () {
            carrusel.scrollLeft = carrusel.scrollLeft + step;
            if (carrusel.scrollLeft === maxScrollLeft) {
                step = -1;
            } else if (carrusel.scrollLeft === 0) {
                step = step * -1;
            }
                
            }, 10);
    
        }; 
    
        const stop = () => {
            clearInterval(intervalo);
        };
    
        carrusel.addEventListener('mouseover', () => {
            stop();
        });
    
        carrusel.addEventListener('mouseout', () => {
            start();
        });
    
        start(); */

        return (
    <div className="carrusel">
    <div class="carrusel-items">
            <div className="carrusel-item">
                <img src={foto1} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto2} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto3} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto1} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto2} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto3} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto1} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto2} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto3} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto1} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto2} alt=""/>
            </div>
            <div className="carrusel-item">
                <img src={foto3} alt=""/>
            </div>
    </div>
    </div>
        )

    }

    export {Carrusel};