import { useState, useEffect } from 'react'
import {getFetch} from './herlpers/getFetch'

function ItemListContainer(){
    const[productos,setProductos]=useState([])
    
    useEffect(()=>{
        getFetch //Llamada a la api
        .then((respuesta)=>{return respuesta})
        .then(respuesta=>setProductos(respuesta))
        .catch(err=>console.log(err))
        .finally(()=>console.log('loading'))
    },[])

    console.log(productos);
    
    return(
        // [1,2,3,4] => nuevo array [<li>1</li>,....]
        <div>
            {[1,2,3,4].map((nro,index) => <li key={index}> {nro} </li>)}
        </div>
    )
}
export{ItemListContainer}