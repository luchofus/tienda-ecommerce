import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './pages/ItemDetailContainer'
import ItemListContainer from './pages/ItemListContainer'
import CarritoPage from './pages/CarritoPage/CarritoPage'



function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        //Navbar nos lleva al home
        <Route path='/' element={<ItemListContainer/>}/>
        //Cada categoria nos lleva a los productos de esa categoria
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        //Cada "detalles del producto" nos lleva a los detalles del producto
        <Route path='/detail/:idDetalleProducto' element={<ItemDetailContainer/>}/>
        //El carrito nos lleva al carrito
        <Route path='/cart' element={<CarritoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
    
}

export default App
