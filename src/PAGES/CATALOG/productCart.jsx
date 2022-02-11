    import React from "react";
    import "../../STYLES/products.css";
    import { useState } from "react";

    const CartProducts = ({ dataArtist }) => {

    const [index, setIndex] = useState (0);
    const changecolor = (a)  => setIndex(a);
    return (
        <div className="card">
                <h1>{dataArtist.title}</h1>
                <div className="image">
                <img src={dataArtist.image[index]} alt="foto" />
                </div>
                <div className="talla">
                <p>Selecciona tu talla</p>
                <button>{dataArtist.size[0]}</button>
                <button>{dataArtist.size[1]}</button>
                <button>{dataArtist.size[2]}</button>
                <button>{dataArtist.size[3]}</button>
                <button>{dataArtist.size[4]}</button>
                <button>{dataArtist.size[5]}</button>
                <button>{dataArtist.size[6]}</button>
                </div>

                <div className="color">
                <p>Seleccionar un color</p>
                <button onClick={()=>changecolor(0)}>{dataArtist.color[0]}</button>
                <button style={{"background-color":"red", "color": "white"}}  onClick={()=>changecolor(1)}>{dataArtist.color[1]}</button>
                <button style={{"background-color":"black", "color": "white"}}  onClick={()=>changecolor(2)}>{dataArtist.color[2]}</button>
                <button style={{"background-color":"blue", "color": "white"}}  onClick={()=>changecolor(3)}>{dataArtist.color[3]}</button>
                <button style={{"background-color":"yellow"}}  onClick={()=>changecolor(4)}>{dataArtist.color[4]}</button>
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
