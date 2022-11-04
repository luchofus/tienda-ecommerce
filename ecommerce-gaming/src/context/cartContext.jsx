import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { createContext } from "react";

const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const vaciarCarrito = () => {
        setCartList([])
    }

    const addItem = (producto) => {
        const existeElProducto = cartList.some(prod => prod.id === producto.id)
        const indexProducto = cartList.findIndex(existeElProducto => existeElProducto.id === producto.id)
        if(existeElProducto){
            cartList[indexProducto].cantidad += producto.cantidad
            setCartList([...cartList])
        }else{
            setCartList([...cartList, producto])
        }
    }
    const precioTotal = () => {
        return cartList.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0)
    }
    const contadorCarrito = () => {
        return cartList.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            vaciarCarrito,
            contadorCarrito,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}