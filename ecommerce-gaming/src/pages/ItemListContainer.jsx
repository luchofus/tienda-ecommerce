import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../components/Items/ItemList'
// import {getProductos} from '../helpers/itemsDisponibles'
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { memo } from 'react'

const ItemListContainer = memo(() => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategoria} = useParams()
  
  const traerProductos = () => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFiltrada = idCategoria ? query(queryCollection, where('categoria', '==', idCategoria)) : queryCollection
    getDocs(queryFiltrada)
    .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    traerProductos()
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
        <ItemList productos={productos} /> 
    }
    </>
  )
})

export default ItemListContainer