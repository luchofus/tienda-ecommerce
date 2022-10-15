import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css'

const Item = ({prod}) => {
    return (
        <Card style={{ margin:'5px', marginTop:'80px', textAlign:'center', display:'flex', alignItems:'center' }} className='col col-lg-3'>
            <Card.Img className='image-producto' src={prod.image}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text className='info-items'>
                    ${prod.price} - {prod.categoria}
                </Card.Text>
                <Link to={`/detail/${prod.name}`} className='items-detail'>Detalles del producto</Link>
            </Card.Body>
            <ItemCount/>
        </Card>

    )
}

export default Item
