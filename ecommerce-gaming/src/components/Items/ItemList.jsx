import React from 'react'
import './ItemList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productos } from '../../helpers/itemsDisponibles';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemList = () => {


return (
    productos.map(prod => <Card key={prod.id} style={{ margin:'5px', marginTop:'80px', textAlign:'center' }} className='col col-lg-3'>
        <Link to={`/detail/${prod.name}`} >
    <Card.Img className='image-producto' src={prod.image}/>
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
        `{prod.price} - {prod.categoria}`
        </Card.Text>
        <Button variant="primary">Detalles del producto</Button>
    </Card.Body>
    </Link>
    <ItemCount/>
</Card>
    )
)
}
export default ItemList