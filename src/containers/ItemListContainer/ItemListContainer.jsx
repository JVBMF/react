import { useState, useEffect } from 'react'
import {getFetch} from '../../helpers/getFetch' /* ¿Por que la ruta se escribe con ../.. ? */
import {Contador} from '../../components/Contador/Contador'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
 
function ItemListContainer(){

    const[productos,setProductos]=useState([])
    
    useEffect(()=>{
        getFetch //Llamada a la api
        .then((respuesta)=>{return respuesta})
        .then(respuesta=>setProductos(respuesta))
        .catch(err=>console.log(err))      
        .finally(()=>console.log('loading'))
    },[])
    
    return(
        // [1,2,3,4] => nuevo array [<li>1</li>,....]
        <div>
            {productos.map((prod) => 

                <Card style={{ width: '18rem' }} key={prod.id}>
                <Card.Img variant="top" src={prod.foto}/>
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Ver detalle del producto</Button>
                  <Contador initial={1} stock={10}/>
                </Card.Body>
                </Card>
                )
            }

            {/* [1,2,3,4].map((nro,index)=><li key={index}> {nro} <li/>)
            
            map solo se puede aplicar a un array, no a un objeto. Lo que hará será recorrerlo y guardarlo en un parametro(nro), su segundo parametro es la posicion de cada iteración (index) aunque no es optimo, si elimino un elemento se cambian los index y key debe ser único*/}
        </div>
    )
}
export{ItemListContainer}