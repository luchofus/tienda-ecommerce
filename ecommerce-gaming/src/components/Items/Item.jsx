import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import './ItemList.css'
import { useCartContext } from "../../context/cartContext";
import { memo } from "react";

const Item = memo(({prod}) => {
    const {addItem} = useCartContext()

    const onAdd = (cantidad=2) => {
        addItem({...prod, cantidad})
    }
    return (
        <Card style={{ margin:'5px', marginTop:'80px', textAlign:'center', display:'flex', alignItems:'center' }} className='col col-lg-3 col-md-4 col-xs-6'>
            <Card.Img className='image-producto' src={prod.image}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text className='info-items'>
                    ${prod.price} - {prod.categoria}
                    <p style={{paddingTop:'5px'}}>Disponibles: {prod.stock}</p>
                </Card.Text>
                <Link to={`/detail/${prod.id}`} className='items-detail'>Detalles del producto</Link>
            </Card.Body>
        </Card>

    )
})

export default Item
