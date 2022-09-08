import {React, useState} from 'react'
import './ItemCount.css'
import { useParams } from 'react-router-dom';
const ItemCount = ({stock}) => {
    
    const [cont, setCont] = useState(1);
    return (
        <>
            <p>Contador {cont}</p>    
        <button className='btn btn-primary boton' onClick={() => { if (cont >= 0 && stock>cont) { setCont(cont + 1)}}}>+</button>
        <button className='btn btn-secondary boton botonred'  onClick={() => { if (cont > 1 ) { setCont(cont - 1)}}}>-</button>
        </>
    );
}
export default ItemCount;
     