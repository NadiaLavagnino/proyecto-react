/* ENVIA INFORMACION CONSULTANDO BASE DE DATOS */

import { useState,useEffect  } from "react";
import ItemList from "../ItemList/ItemList";
import consultarBDD from '../../assets/funciones.js'

const ItemListConatiner = ({greeting}) => {
    const [productos, setProductos] = useState([]);
useEffect(() => {
    consultarBDD().then(productList => {
        const productList = product.filter(prod=> prod.stock >0) 
        const cardProducto = ItemList ({productList})
        setProductos(cardProductos)
        })
}, []);
console.log(productos)
    return (
        <>
            <div className="row cardProductos">
                {productos}
            </div>
        </>
    );
}


export default ItemListConatiner;
