import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Contador} from '../../components/Contador/Contador'

function Item({prod}){
    return(
        <div>
            
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={prod.foto}/> */}
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" /* onclick(key)=<ItemDetailContainer/> Esto para despues*/>
                        Ver detalle del producto
                    </Button>

                    <Contador initial={1} stock={10}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export{Item}