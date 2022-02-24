import React from 'react';
import './TituloApp.css';

/* TituloApp es un objeto que tiene como elementos {titulo,subtitulo} */

const TituloApp = ({titulo/* ,subtitulo, saludo */}) =>{
    return(

        <div>
            <h1>{titulo}</h1>

            {/* <h2>{subtitulo}</h2>
            <button onClick={saludo}>Ejecutar saludo</button> */}

        </div>

    )
}
export {TituloApp}

/* Otra forma:

const TituloApp = (obj) =>{
    return(

        <div>
            <h1>{obj.titulo}</h1>
            <h2>{obj.subtitulo}</h2>
            <button onClick={obj.saludo}>Ejecutar saludo</button>
        </div>

    )
} 
export {TituloApp}
*/