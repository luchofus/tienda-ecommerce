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
      <div style={{height:'70vh', textAlign:'center', display:'flex', alignItems:'center'}} className='container-fluid'>
        <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      </div>
        :
      <div className='row container-fluid' style={{display:'flex', justifyContent:'center'}}>
        <ItemList/>
      </div>
    }
    </>
  )
}

export default ItemListContainer