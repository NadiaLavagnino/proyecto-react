import {useState} from "react";
const ItemCount = () => {
    const [numero, setNumero] = useState(1);

    const sumar = () => {
        if(numero < 10) {
            setNumero(numero+1)
        }
    }
    const restar = () => {
        if (numero >1) {
            setNumero(numero-1)
        }
    }
    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {numero}
            <button className="btn btn-dark" onClick={() => restar()}>-</button>
            <button className="btn btn-light">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
