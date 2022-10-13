import React from 'react'
import { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount/ItemCount'
import ItemList from '../components/Items/ItemList'
import {getProductos} from '../helpers/itemsDisponibles'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(productos)

  useEffect(() => {
      getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {
      loading ?
      <h2>Cargando productos...</h2>
        :
      <div className='row container-fluid' style={{display:'flex', justifyContent:'center'}}>
        <ItemList/>
      </div>
    }
    <ItemCount/>
    <div>ItemListContainer</div>
    </>
  )
}

export default ItemListContainer