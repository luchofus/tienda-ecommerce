import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const {idDetalleProducto} = useParams()
    console.log(idDetalleProducto)
    
    return (
        <>
        <div><ItemDetail/></div>
        <h1 style={{padding:'70px'}}>ItemDetail</h1>
        </>
    )
}

export default ItemDetailContainer