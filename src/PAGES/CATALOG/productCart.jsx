    import React from "react";
    import "../../STYLES/products.css";
    import { useState } from "react";

    const CartProducts = ({ dataArtist }) => {

    const [index, setIndex] = useState (0);
    const changecolor = (a)  => setIndex(a);
    return (
        <div className="card">
                <p>{dataArtist.title}</p>
                <img src={dataArtist.image[index]} alt="foto" />
                <p>Selecciona tu talla</p>
                <div className="talla">
                <button>{dataArtist.size[0]}</button>
                <button>{dataArtist.size[1]}</button>
                <button>{dataArtist.size[2]}</button>
                <button>{dataArtist.size[3]}</button>
                <button>{dataArtist.size[4]}</button>
                <button>{dataArtist.size[5]}</button>
                <button>{dataArtist.size[6]}</button>
                </div>

                <p>Seleccionar un color</p>
                <div className="color">
                <button onClick={()=>changecolor(0)}>{dataArtist.color[0]}</button>
                <button onClick={()=>changecolor(1)}>{dataArtist.color[1]}</button>
                <button onClick={()=>changecolor(2)}>{dataArtist.color[2]}</button>
                <button onClick={()=>changecolor(3)}>{dataArtist.color[3]}</button>
                <button onClick={()=>changecolor(4)}>{dataArtist.color[4]}</button>
                </div>

                <div className="addAnddelete_Button">

                </div>

                <div className="addButton">
                    <button>Agregar al carrito</button>
                </div>
                    
                </div>



    )

}

        export {CartProducts};
