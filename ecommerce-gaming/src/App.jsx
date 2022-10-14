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
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/detail/:idDetalleProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CarritoPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
    
}

export default App
