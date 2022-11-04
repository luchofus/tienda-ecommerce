import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext'

const CarritoPage = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: 'Richards',
        apellido: 'Millie',
        email: 'richardm@gmail.com',
        telefono: '11883479923',
    })
    const {cartList, vaciarCarrito, precioTotal} = useCartContext()
    const terminarCompra = (e) => {
        e.preventDefault()
        const compra = {}
        
        compra.comprador = {
            nombre: datosForm.nombre,
            apellido: datosForm.apellido,
            email: datosForm.email,
            telefono: datosForm.telefono
        }

        compra.items = cartList.map(prod => {
            const{id, nombre: name, price} = prod
            return{id, name, price}
        })

        compra.total = precioTotal()

        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, compra)
        .then(resp => resp)
        .catch(err => err)
        .finally(() => vaciarCarrito())
    }
    const inputChange= (e) => {
        setDatosForm({
            ...datosForm, [e.target.value]: e.target.value
        })
    }
    return (
        <>
        <div style={{width:'100vw', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <div>
                <form style={{marginTop:'150px', display:'flex', flexDirection:'column'}} onSubmit={terminarCompra}>
                    <input type='text' name='name' placeholder='Nombre/s' value={datosForm.nombre} onChange={inputChange} style={{padding:'10px'}}></input>
                    <input type='number' name='phone' value={datosForm.telefono} placeholder='Teléfono' onChange={inputChange}  style={{padding:'10px'}}></input>
                    <input type='text' name='email' value={datosForm.email} placeholder='Email' onChange={inputChange} style={{padding:'10px'}}></input>
                    <button type='submit'>Terminar compra</button>
                </form>
            </div>
            <div>
                <ul style={{paddingTop:'100px'}}>
                    {cartList.map(prod => <li>Nombre: {prod.name}, precio: ${prod.price}, cantidad:{prod.cantidad}</li>)}
                </ul>
                <p style={{fontWeight:'bold', paddingLeft:'10px'}}>Precio total: ${precioTotal()}</p>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </div>
        </>
    )
}

export default CarritoPage