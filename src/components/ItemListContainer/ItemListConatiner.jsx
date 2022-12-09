/* ENVIA INFORMACION CONSULTANDO BASE DE DATOS */
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import consultarBDD from '../../assets/funciones.js'

const ItemListConatiner = ({greeting}) => {
    const [productos, setProductos] = useState([]);
useEffect(() => {
    consultarBDD().then(prod => {
        setProductos(prod)
        console.log(productos)})
}, [input]);
    
    return (
        <>
            <p>{greeting}</p>
        </>
    );
}

export default ItemListConatiner;
