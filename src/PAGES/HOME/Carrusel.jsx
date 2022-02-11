   
    //Here we import as the images we need for the carrusel
    import React from 'react';
    import foto1 from '../../IMAGES/foto1.jpg';
    import foto2 from '../../IMAGES/foto2.jpg';
    import foto3 from '../../IMAGES/foto3.jpg';
    import '../../STYLES/carrusel_home.css';


    //The following function is what store our carrusel//
    function  Carrusel() {
    
    return (
            <div className="carrusel">
            <div className="carrusel-items">
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