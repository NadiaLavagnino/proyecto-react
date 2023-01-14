import { useState, useEffect } from "react";
import { consultarBBD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail.jsx/ItemDetail";
const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);
    
    
useEffect(() => {
    consultarBBD().then(productos =>{
        const prod = productos.fin(product => product.id === 1)
        console.log(prod)
    })
    return () => {
        cleanup
    };
}, []);    
    
    
    return (
        <div>
            
        </div>
    );
}

export default ItemDetailContainer;
