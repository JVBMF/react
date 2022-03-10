import Card from 'react-bootstrap/Card'


function ItemDetail({producto}){

        

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.foto}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export{ItemDetail}