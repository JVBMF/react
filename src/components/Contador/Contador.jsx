import React from 'react';
import { useState } from "react"; /* Uso un hook, es decir, el valor de la variable count será persistente */
import './Contador.css'

const Contador =(obj) =>{

    const initial = obj.initial;
    const stock = obj.stock;
    const [count, setCount]=useState(initial);
    const dif =stock-count;
    
    /* console.log(dif); */

    const suma=()=>{
        if(count<stock){
            setCount(count+1);
        }
        else{
            alert('Se excedió el stock');
        }
    }
 
    const resta=()=>{
        if(count>initial){
            setCount(count-1);
        }
        else{
            alert('Valor no valido')
        }
    }

    return(

        <div className="conteContador">
            <div className="contador">
                <button onClick={suma} id="button1">+</button>
                <label>Stock disponible:{dif} </label> 
                <button onClick={resta} id="button2">-</button> {/* Al hacer click se vuelve a cargar todo el componente (rerenderiza). Es decir, se vuelve a ejecutar la funcion  */}    
            </div>
        </div>

    )
}

export{Contador}