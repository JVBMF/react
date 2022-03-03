import { useState, useEffect } from "react"; /* Uso un hook, es decir, el valor de la variable count será persistente */
import './Contador.css'

const Contador =() =>{

    const [count, setCount]=useState(0) /* Esto es un array. useState devuelve un array, en este caso de dos elementos. El parametro de useState es el tipo de dato que quiero que sea, el cual va a inicializar al 1er elemento, el segundo elemento es el que se setea al hacer click en suma o resta. Al renderizar la variable count tendrá el valor que le asignará setCount. */
    const[fecha,setFecha]=useState(Date())
    const[bool,setBool]=useState(true);

    useEffect(()=>{
        console.log('Llamada a api o tarea asincrónica pesada siempre'); /* Al utilizar useEffect hago que se saltee esta tarea y se ejecute al final. Esto es útil cuando una tarea es muy pesada porque puede llegar a entorpecer la renderización.  */
        return()=>{console.log('al desmontar')} //limpia antes de volver a ejecutar

    }/* Si no hay filtro el comando se ejecutará siempre*/
    )

    useEffect(()=>{
        console.log('Llamada a api o tarea asincrónica pesada una vez al principio');
    }, 
    []/* Si este filtro está vacío se ejecutará solo una vez al principio*/
    )

    useEffect(()=>{
        console.log('solo si cambia bool');
    }, 
    [bool]
    )

        const suma=()=>{
            setCount(count+1);
            setFecha(Date());
        }
     
        const resta=()=>{
            setCount(count-1);
            setFecha(Date());
        }

    return(

        <div className="conteContador">
            <div className="contador">
                <label>{fecha}</label>
                <button onClick={suma} id="button1">+</button>
                <label id="label1">{count}</label>  
                <button onClick={resta} id="button2">-</button> {/* Al hacer click se vuelve a cargar todo el componente (rerenderiza). Es decir, se vuelve a ejecutar la funcion  */}
                <button onClick={()=>{setBool(!bool)}}>Booleano</button>
                
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export{Contador}