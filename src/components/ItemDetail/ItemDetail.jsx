import { Detail } from '../Detail/Detail'

//No uso map, genero la card de una, ¿esto está bien?

function ItemDetail({producto}){

    return(
        producto.map((prod) => <Detail key={prod.id} prod={prod}/>)
    )
}

export{ItemDetail}