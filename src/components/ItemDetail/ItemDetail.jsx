import Card from 'react-bootstrap/Card'

//No uso map, genero la card de una, ¿esto está bien?

function ItemDetail({producto}){

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.thumbnail}/>
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export{ItemDetail}