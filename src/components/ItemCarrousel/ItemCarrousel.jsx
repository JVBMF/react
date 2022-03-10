import React from 'react';
import './ItemCarrousel.css'

//function ComponenteImagen(){} sería otra forma de hacerlo

function ItemCarrousel(){

    return(

        <div id="conteItemCarrousel">

            <div className='itemCarrousel' id="itemCarrousel1">

                <div className="tarjetaCarrousel" id='tarjetaCarrousel1'>
                    A
                </div>

                <div className="flechasCarrousel">
                    <a href="#itemCarrousel1">
                    <i >I</i>
                    </a>

                    <a href="#itemCarrousel2">
                    <i>D</i>
                    </a>
                </div>

            </div>

            <div className='itemCarrousel' id="itemCarrousel2">

                <div className="tarjetaCarrousel" id='tarjetaCarrousel2'>
                    B
                </div>

                <div className="flechasCarrousel">

                    <a href="#itemCarrousel1">
                        <i>I</i>
                    </a>

                    <a href="#itemCarrousel3">
                        <i>D</i>
                    </a>
                </div>   

            </div>

            <div className='itemCarrousel' id="itemCarrousel3">

                <div className="tarjetaCarrousel" id='tarjetaCarrousel3'>
                    C
                </div>

                <div className="flechasCarrousel">

                    <a href="#itemCarrousel2">
                        <i>I</i>
                    </a>

                    <a href="#itemCarrousel3">
                        <i>D</i>
                    </a>

                </div>   

            </div>
        </div>
    )
}

export {ItemCarrousel}