import Card from 'react-bootstrap/Card'
import {Contador} from '../Contador/Contador'

function ItemDetail({producto}){
    return(
        <div>
            <br/>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={producto.}/> */}
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                </Card.Body>
                <Contador initial={1} stock={10}/>
            </Card>       
        </div>
    )
}

export {ItemDetail}
