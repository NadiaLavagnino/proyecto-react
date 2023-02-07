/* ENVIA INFORMACION CONSULTANDO BASE DE DATOS */
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList.jsx";
import {getProductos, getProducto, updateProducto} from '../../assets/firebase.js';


const ItemListConatiner = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        if(category) {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            getProductos().then(products => {
                const productsList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
        
        /*   getProducto("4J42QlJewel8VYp8XnlL").then(prod => {
            prod.stock -= 2
            delete prod.id
            updateProducto("4J42QlJewel8VYp8XnlL", prod).then(estado => console.log(estado))
        }) */

        

        // cargarBDD()
},[category]);


    return (
        <>
            <div className="row cardProductos">
                {productos}
            </div>
        </>
    );
}


export default ItemListConatiner;
