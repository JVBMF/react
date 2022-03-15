import { useEffect, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
/* import { getFetch } from '../../helpers/getFetch' */
import {useParams} from 'react-router-dom'

function ItemDetailContainer(){
    const [producto,setProducto]=useState([])

    const {detalleId} = useParams() /* Capturo el parametro */
    console.log(detalleId) /* Veo que capture efectivamente el parametro, y lo hace. Obs: detalleId es un string*/

    useEffect(()=>{

            if(detalleId){

                fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas/') //¿aca tengo que agregar el filtro del id?

                /* fetch('https://api.mercadolibre.com/sites/MLA/search?'+detalleId) */

                    /* Intento definiendo un solo then():

                    .then(resp=>{
                        resp.json())
                        let elementos=resp.json() //Esto es un objeto
                        let elementosArray=elementos.results //¿esto es un array? da undefined
                        console.log(elementos)
                        console.log(typeof(elementos))
                        console.log(elementosArray)
                        console.log(typeof(elementosArray))//Sigue dando undefined */
                        /* const elementosFiltrados=elementosArray.filter(pro => pro.id===detalleId)
                        console.log(elementosFiltrados)
                        setProducto(elementosFiltrados) 
                    
                    })*/

                .then(resp=>resp.json())
                .then(resp=>console.log(resp)) //Problema: tengo que transformar el objeto resp en un array
                .then(resp=>console.log(typeof(resp)))

                
               /*  .then(resp=>{console.log(resp.results)})  *///Me muestra toda la lista sin tener en cuenta el detalleId (muestra todos los productos) ¿Como hago para filtrar esto por id si me dice que resp.filter no es una funcion?

                /* .then(resp=>console.log(resp.filter(pro=>pro.id===detalleId))) */

                /* .then(resp=> setProducto(resp.filter(pro => pro.id===detalleId) )) */

                /* .then(resp=>console.log(resp.filter(pro=>pro.id===detalleId)))
                .then((resp) => setProducto(resp.filter(pro => pro.id===detalleId) )) */

            }else{

                fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas/')
                
                .then(resp => resp.json()) 
                
                .then(resp => setProducto(resp.results))
            }
            
    },[detalleId])
    

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export {ItemDetailContainer}
