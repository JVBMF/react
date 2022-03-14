import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Contador} from '../../components/Contador/Contador'
import {Link} from 'react-router-dom'

function Item({prod}){
    return(
        <div key={prod.id}>
            <br/>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={prod.foto}/> */}
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div>
                        <Link to={`/detalle/${prod.id}`}> {/* Es importante usar esas comillas */}
                            <Button variant="primary" 
                            >Ver detalle del producto
                            </Button>
                        </Link>
                    </div>

                    <Contador initial={1} stock={10}/>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export{Item}