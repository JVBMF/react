import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from '../../components/ItemList/ItemList'

function ItemListContainer(){

    const[productos,setProductos]=useState([])

    const {categoriaId}=useParams()

    useEffect(()=>{

        /* fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')

        .then(resp => resp.json())

       .then(resp=>{console.log(resp)}) */  /* con esto veo que es lo que puedo usar como filtro*/

        /* .then(resp => setProductos(resp.results)) */

        if(categoriaId){

            fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas')

            .then(resp => resp.json())
            
            .then(resp => setProductos(resp.filter(pro => pro.id===categoriaId))) //Que me deje usar resp.filter implica que resp es un array y el resp.json() lo convirtió de objeto a array

        }else{//si entra por el undefined me muestra todo sin filtrar
            
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas')
            
            .then(resp => resp.json())
            /* .then(resp => console.log(resp.results)) */  //Al escribir esta línea me falla el código 
            .then(resp => setProductos(resp.results)) 
        }
        
    },[categoriaId] )

    console.log(categoriaId) /* Cuando quiero ir a lista me sale que su categoriaId es undefined, voy a aprovechar eso haciendo un if*/
    
    return(
            <div>
                <ItemList productos={productos}/>  {/* Siguiendo este return cuando voy a la pestaña lista me debería mostrar lo mismo que muestra en la pestaña gorra o remera */}
            </div>
    )
}
export{ItemListContainer}