import { useState, useEffect } from 'react'
/* import {getFetch} from '../../helpers/getFetch' */  /* ¿Por que la ruta se escribe con ../.. ? */
import {Contador} from '../../components/Contador/Contador'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
 
function ItemListContainer(){

    const[productos,setProductos]=useState([])
    
    /* useEffect(()=>{
        getFetch //Llamada a la api
        .then((respuesta)=>{return respuesta})
        .then(respuesta=>setProductos(respuesta))
        .catch(err=>console.log(err))      
        .finally(()=>console.log('loading'))
    },[]) */

    useEffect(()=>{

        /* Api mia; */

        /* let url ='assets/DATA.json'  Por algún motivo esta no anda y la de meli si */

        /* Api MercadoLibre: */

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=adidas/?limit=10') //Por defecto el verbo es GET. No se como poner el limite acá

        .then(resp => resp.json()) //Me devuelve el parse

        .then(resp => setProductos(resp.results))

        /* .then(resp => console.log(resp.results))  No me deja verlo si use un then con un resp.results antes, no se que onda*/
        
    },[])
    
    return(
        // [1,2,3,4] => nuevo array [<li>1</li>,....]
        <div>
            {productos.map((prod) => 

                <Card style={{ width: '18rem' }} key={prod.id}>
                {/* <Card.Img variant="top" src={prod.foto}/> */}
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
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