import React from "react"

const Products = ({ dataArtists }) => {
    console.log(dataArtists)
    return (

        <div className="products">
            {dataArtists.map((dataArtist, i ) => (
            <div className="card" key={i}>
                <img src={dataArtist.image} />
                <p>{dataArtist.title}</p>
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

                <p>Selecciona un color</p>
                <div className="color">
                <button>{dataArtist.color[0]}</button>
                <button>{dataArtist.color[1]}</button>
                <button>{dataArtist.color[2]}</button>
                <button>{dataArtist.color[3]}</button>
                <button>{dataArtist.color[4]}</button>
                <button>{dataArtist.color[5]}</button>
                <button>{dataArtist.color[6]}</button>
                </div>

                <div className="button">
                    
                </div>

                </div>
        ))}
        </div>
    );
};

export {Products};

