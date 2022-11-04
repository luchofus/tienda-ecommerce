import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import {useCartContext } from '../../context/cartContext'
import BtnSeguirComprando from '../Buttons/BtnSeguirComprando'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({prod}) => {
    const [isCount, setIsCount] = useState(true)
    const {addItem} = useCartContext()

    const onAdd = (cantidad) => {
        addItem({...prod, cantidad})
        setIsCount(false)
    }
return (
<>
    <div className='cont-card-detail'>
        <div className='cont-img-detail'>
            <Card style={{textAlign:'center', display:'flex', alignItems:'center' }} className="card-detail">
                <Card.Img className='image-producto-detail' src={prod.image} style={{marginTop:'85px'}} />
            </Card>
        </div>
        <div className='cont-details-prods'>
        <Card.Body style={{marginTop:'15px'}} className="body-card-detail">
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text className='info-items'>
                ${prod.price} - {prod.categoria}
            </Card.Text>
        </Card.Body>
            {
                isCount ? 
                <ItemCount fn={onAdd} stock={prod.stock} init={1}/>
                :
                <BtnSeguirComprando/>
            }
        </div>
    </div>
</>
)
}

export default ItemDetail