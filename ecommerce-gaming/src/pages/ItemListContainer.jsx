import React from 'react'
import { useEffect, useState } from 'react'
import ItemCount from '../components/ItemCount/ItemCount'
import ItemList from '../components/Items/ItemList'
import {getProductos} from '../helpers/itemsDisponibles'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()
  console.log(idCategoria)

  useEffect(() => {
      if(idCategoria){
        getProductos()
        .then(respuesta => setProductos(respuesta.filter(productos => productos.categoria === idCategoria)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
      }else{
        getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
      }
  }, [idCategoria])

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