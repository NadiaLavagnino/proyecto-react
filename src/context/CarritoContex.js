import { useContext, useState, createContext } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    const[carrito, setCarrito] = useState([]);

    const isInCart = (id) => {
        return carrito.find(producto => producto.id ===id)
    }
/* AGREGA UN PRODUCTO AL CARRITO */
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = carrito.findIndex(prod =>prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else{
            const nuevoProducto = {
                ...producto,
                cant: cantidad
            }

            setCarrito([...carrito,nuevoProducto])
        }
    }

/* VACIA TODO EL CARRITO */
    const emptyCart = () =>{
        setCarrito([])
    }

/* RECIBE UN ID COMO PARAMETO Y SACA UN OBJETO */
    const removeItem = (id) =>{
        setCarrito(carrito.filter(prod => prod.id !== id))
    }
    
    const getItemQuantity = () =>{
        return carrito.reduce((acum,prod) => acum += prod.cant, 0)
    }
/* CALCULA EL PRECIO TOTAL DE LA COMPRA*/
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito)
    return(
        <CarritoContext.Provider value={{carrito, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}