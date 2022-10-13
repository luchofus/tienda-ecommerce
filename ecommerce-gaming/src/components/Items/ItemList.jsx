import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productos } from '../../helpers/itemsDisponibles';

const ItemList = () => {


return (
    productos.map(prod => <Card key={prod.id} style={{ margin:'5px' }} className='col col-lg-3'>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        {prod.price}
        </Card.Text>
        <Button variant="primary">Detalles del producto</Button>
    </Card.Body>
</Card>
    )
)
}
export default ItemList