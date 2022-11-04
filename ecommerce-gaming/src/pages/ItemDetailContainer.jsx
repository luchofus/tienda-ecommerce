import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
// import { getProductos } from '../helpers/itemsDisponibles'

const ItemDetailContainer = () => {

    const {idDetalleProducto} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'items', idDetalleProducto)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
    }, [])

    console.log(product)
    return (
        <>
        <div>
            {
                loading ?
                    <div style={{height:'70vh', textAlign:'center', display:'flex', alignItems:'center'}} className='container-fluid'>
                        <svg viewBox="25 25 50 50">
                            <circle r="20" cy="50" cx="50"></circle>
                        </svg>
                    </div>
                    :
                <ItemDetail prod={product}/>
            }
        </div>
        </>
    )
}

export default ItemDetailContainer