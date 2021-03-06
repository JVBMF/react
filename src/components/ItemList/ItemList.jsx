import {Item} from '../Item/Item'

function ItemList({productos}){
    return(
        productos.map((prod) => <Item key={prod.id} prod={prod} />)
    )
}

export {ItemList}