import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'


const CartWidget = () => {
    const {contadorCarrito} = useCartContext()
    return (
        <Link to='/cart' className='link-cart' style={{display:'flex', alignItems:'center'}}>
            <i className='fa-solid fa-cart-shopping' style={{paddingRight:'5px'}}></i>
            <p style={{color:'white', margin:'0px', padding:'0px 30px 0px 0px', fontWeight:'bold'}}>{contadorCarrito()}</p>
        </Link>
    )
}

export default CartWidget