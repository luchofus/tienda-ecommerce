import React from 'react'
import './ItemList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productos } from '../../helpers/itemsDisponibles';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = () => {


return (
    productos.map(prod => <Card key={prod.id} style={{ margin:'5px', textAlign:'center' }} className='col col-lg-3'>
    <Card.Img className='image-producto' src={prod.image}/>
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        {prod.price}
        </Card.Text>
        <Button variant="primary">Detalles del producto</Button>
    </Card.Body>
    <ItemCount/>
</Card>
    )
)
}
export default ItemList