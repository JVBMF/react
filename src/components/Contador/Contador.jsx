import { useState } from "react";
import './Contador.css'


const Contador =() =>{

    const [count, setCount]=useState(0)

        const suma=()=>{
            setCount(count+1);
        }
     
        const resta=()=>{
            setCount(count-1)
        }

    return(

        <div className="conteContador">
            <div className="contador">
                <button onClick={suma} id="button1">+</button>
                <label id="label1">{count}</label> 
                <button onClick={resta} id="button2">-</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export{Contador}