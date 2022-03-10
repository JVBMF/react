import { useState, useEffect } from 'react'
import {ItemList} from '../../components/ItemList/ItemList'


function ItemListContainer(){

    const[productos,setProductos]=useState([])

    useEffect(()=>{

        /* Api MercadoLibre: */

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas') //Por defecto el verbo es GET. No se como poner el limite acá

        .then(resp => resp.json()) //Me devuelve el parse

        .then(resp => setProductos(resp.results))

        /* .then(resp => console.log(resp.results))  No me deja verlo si use un then con un resp.results antes, no se que onda*/
        
    },[])
    
    return(
        
            <ItemList productos={productos}/>
        
    )
}
export{ItemListContainer}