import {Item} from '../../containers/Item/Item'

function ItemList({productos}){
    return(
        productos.map((prod) => <Item key={prod.id} prod={prod} />)
    )
}

export {ItemList}