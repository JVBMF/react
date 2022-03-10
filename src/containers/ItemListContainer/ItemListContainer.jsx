import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from '../../components/ItemList/ItemList'

function ItemListContainer(){

    const[productos,setProductos]=useState([])

    const {categoriaId}=useParams()

    useEffect(()=>{

        if(categoriaId){
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas')

            .then((resp) => setProductos(resp.filter(pro => pro.categoria===categoriaId))) //La pregunta es, existe pro.categoria en la api?
        }else{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas')

            .then(resp => setProductos(resp.results))
        }
        
    },[categoriaId])

    console.log(categoriaId)  /* Cuando quiero ir a lista me sale que su categoriaId es undefined, voy a aprovechar eso haciendo un if*/
    
    return(
            <ItemList productos={productos}/>
    )
}
export{ItemListContainer}