import Card from 'react-bootstrap/Card'

function Detail(prod){
    return(
        <div>
            <br/>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={producto.}/> */}
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export {Detail}