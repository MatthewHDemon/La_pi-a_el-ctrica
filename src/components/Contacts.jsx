import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook, faInstagram, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "../styles/contacts.css";

function Contacts() {
    return (
        <div className="container_contacts">
            <h2>SIGUENOS</h2>
            <Outlet/>
            <ul className="social_medias">
                <li>
                    <a href="https://twitter.com/lapinaelectrica" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} style={{color:"#fff", fontSize:"40px"}} /> 
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/lapinaelectrica/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} style={{color:"#ffff", fontSize:"40px"}} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lapinaelectrica/?hl=en" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} style={{color:"#ffff", fontSize:"40px"}} />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@lapinaelectrica?_d=secCgYIASAHKAESMgowpXBxlZRgwHlDJS1p20IMkQCHjKGo9BpnZLc9flBv1Wq7Qdx2B6uGNqM%2FrKOmp%2BI8GgA%3D&language=es&sec_uid=MS4wLjABAAAAZUTSpiCbviCUGWFzwaHhyRL9_wKTJK2a_hOfTcsZGNjesvkqsLdJwJkLmYvCFlzi&sec_user_id=MS4wLjABAAAAZUTSpiCbviCUGWFzwaHhyRL9_wKTJK2a_hOfTcsZGNjesvkqsLdJwJkLmYvCFlzi&share_app_name=musically&share_author_id=6927389126732235782&share_link_id=34548cc5-9899-4ef9-bbfd-a21d2a661b11&timestamp=1612986527&u_code=dh2b3dle000c5f&user_id=6927389126732235782&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp&source=h5_m&_r=1" target="_blank">
                    <FontAwesomeIcon icon={faTiktok} style={{color:"#ffff", fontSize:"40px"}} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCiMtkwV-FOdOVJTWzzBpoaw" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} style={{color:"#ffff", fontSize:"40px"}} /> 
                    </a>
                </li>
                {/*
                
                <li>
                    <NavLink to="https://www.tiktok.com/@lapinaelectrica?_d=secCgYIASAHKAESMgowpXBxlZRgwHlDJS1p20IMkQCHjKGo9BpnZLc9flBv1Wq7Qdx2B6uGNqM%2FrKOmp%2BI8GgA%3D&language=es&sec_uid=MS4wLjABAAAAZUTSpiCbviCUGWFzwaHhyRL9_wKTJK2a_hOfTcsZGNjesvkqsLdJwJkLmYvCFlzi&sec_user_id=MS4wLjABAAAAZUTSpiCbviCUGWFzwaHhyRL9_wKTJK2a_hOfTcsZGNjesvkqsLdJwJkLmYvCFlzi&share_app_name=musically&share_author_id=6927389126732235782&share_link_id=34548cc5-9899-4ef9-bbfd-a21d2a661b11&timestamp=1612986527&u_code=dh2b3dle000c5f&user_id=6927389126732235782&utm_campaign=client_share&utm_medium=android&utm_source=whatsapp&source=h5_m&_r=1">
                    <FontAwesomeIcon icon={faTiktok} style={{color:"#ffff", fontSize:"40px"}} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://www.youtube.com/channel/UCiMtkwV-FOdOVJTWzzBpoaw/videos">
                    <FontAwesomeIcon icon={faYoutube} style={{color:"#ffff", fontSize:"40px"}} />
                    </NavLink>
                </li> */}
                
            </ul>
            <h3>© PIÑA ELÉCTRICA</h3>
        </div>
    );

}
library.add(fab);
export {Contacts}