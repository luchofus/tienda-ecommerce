import React from 'react'
import { Link } from 'react-router-dom'
import './btns-buy.css'

const BtnSeguirComprando = () => {
  return (
    <>
      <div className='cont-btns-buy'>
        <Link to='/'><button className='seguir-comprando'> Seguir comprando </button></Link>
        <Link to='/cart'><button className='terminar-compra'>Terminar compra</button></Link>
    </div>
    </>
  )
}

export default BtnSeguirComprando