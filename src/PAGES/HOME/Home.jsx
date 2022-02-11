    
    //Here we import our componentes that belong to our route "Home", and the logo of our mark//
    import React from 'react';
    import '../../STYLES/list.css';
    import '../../STYLES/Tablet.css'
    import logo from '../../IMAGES/logo.gif';
    import {Carrusel} from './Carrusel';
    import {Contacts} from './Contacts';

    // The following function is where constructe our main page "Home"
    function Home() {

                    return (
                      
                    <>
                        {/* Box that contains the logo of the mark */}
                        <div className="logo">
                            <img src={logo} alt="loguito"/>
                        </div>
                            {/* Tag of our component "Carrusel" */}
                            <Carrusel/>
                            {/* Tag of our component "contacts" */}
                            <Contacts/>
                    </>

                );
            }

    export {Home}