import { useEffect, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
/* import { getFetch } from '../../helpers/getFetch' */
import {useParams} from 'react-router-dom'

function ItemDetailContainer(){
    const [producto,setProducto]=useState([])

    const {detalleId} = useParams() /* Capturo el parametro */
    console.log(detalleId) /* Veo que capture efectivamente el parametro, y lo hace. Obs: detalleId es un string*/

    //Llamada a la api
    /* useEffect(()=>{
        getFetch
        .then(resp=> setProducto(resp.find(prod =>prod.id===1)))
    },[]) */

    useEffect(()=>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas')
            /* .then(resp=> resp.json())
            .then(resp=>console.log(resp)) */
            .then(resp=>setProducto(resp.find(prod=>prod.id)))
    },[])
    /* console.log(producto) */

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export {ItemDetailContainer}
