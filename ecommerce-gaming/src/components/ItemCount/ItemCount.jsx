import React from 'react'
import { useState } from 'react'
import BtnSeguirComprando from '../Buttons/BtnSeguirComprando'
import CartWidget from '../Navbar/CartWidget'
import './ItemCount.css'

const ItemCount = ({stock, init, fn}) => {
    
const [btnAdd, setBtnAdd] = useState('button')

const addCart = () => {
    setBtnAdd('input')
}

const [count, setCount] = useState(init)

const añadirMas = () => {
    if(count < stock){
        setCount(count + 1)
        console.log(`Productos: ${count}`)
    }
}
const añadirMenos = () => {
    if(count > init){
        setCount(count - 1)
        console.log(`Productos: ${count}`)
    }
}

const añadirAlCarrito = () => {
    fn(count)
}

return (
<>
        {
            btnAdd === 'button' ?
            <div className='cont-item-count'>
                <div className='cont-controls'>
                    <button className='btn-add' onClick={añadirMas}><span className='more'>+</span></button>
                    <p className='count'>{count}</p>
                    <button className='btn-noadd' onClick={añadirMenos}><span className='less'>-</span></button>
                </div>
                <div className='cont-add-cart'>
                    <button className='btn-add-cart' onClick={añadirAlCarrito}><span className='txt-addcart'>Agregar al carrito</span></button>
                </div>
            </div>
        :
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <BtnSeguirComprando/>
            </div>
}
</>
)
}

export default ItemCount