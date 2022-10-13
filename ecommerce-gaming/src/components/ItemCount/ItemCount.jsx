import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {

const [contador, setContador] = useState(0)

const añadirAlCarrito = () => {
    setContador(contador + 1)
}
const eliminarDelCarrito = () => {
    setContador(contador - 1)
    if(contador == 0) {
        setContador(0)
    }
}

return (
<>
    <div className='cont-item-count'>
        <div className='cont-controls'>
            <button className='btn-add' onClick={añadirAlCarrito}><span className='more'>+</span></button>
            <p className='count'>{contador}</p>
            <button className='btn-noadd' onClick={eliminarDelCarrito}><span className='less'>-</span></button>
        </div>
        <div className='cont-add-cart'>
            <button className='btn-add-cart'><span className='txt-addcart'>Agregar al carrito</span></button>
        </div>
    </div>
</>
)
}

export default ItemCount