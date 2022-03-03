import { useState, useEffect } from "react"; /* Uso un hook, es decir, el valor de la variable count será persistente */
import './Contador.css'

const Contador =(obj) =>{

    let initial = obj.initial;
    let stock = obj.stock;
    const [count, setCount]=useState({initial})

    const suma=()=>{
        setCount(count+1);
    }
 
    const resta=()=>{
        setCount(count-1);
    }

    useEffect(()=>{
        console.log('no válido');
    }, [count<initial]
    )

    useEffect(()=>{
        console.log('no válido');
    }, [count>=stock]
    )

        

    return(

        <div className="conteContador">
            <div className="contador">

                <button onClick={suma} id="button1">+</button>
                <label id="label1">{count}</label>  
                <button onClick={resta} id="button2">-</button> {/* Al hacer click se vuelve a cargar todo el componente (rerenderiza). Es decir, se vuelve a ejecutar la funcion  */}    
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export{Contador}