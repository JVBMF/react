import Card from 'react-bootstrap/Card'
import {Contador} from '../Contador/Contador'

function ItemDetail({producto}){
    return(
        <div>
            <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.thumbnail}/>
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>${producto.price}</Card.Text>
                </Card.Body>
                <Contador initial={1} stock={10}/>
            </Card>       
        </div>
    )
}

export {ItemDetail}
