import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to='/cart' className='link-cart'>
            <i className='fa-solid fa-cart-shopping'></i>
        </Link>
    )
}

export default CartWidget