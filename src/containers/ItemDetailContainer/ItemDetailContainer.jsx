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

                .then((resp)=>resp.json())
                .then((resp)=>{
                    const selectedProduct=resp.results.find((item)=>item.id===detalleId); //resp.results es un array al que le aplico .find
                    if(selectedProduct){
                        setProducto(selectedProduct);
                    }
                })

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
