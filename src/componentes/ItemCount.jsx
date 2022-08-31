import {React, useState} from 'react'
import './ItemCount.css'
const ItemCount = ({stock=10}) => {
    const [cont, setCont] = useState(0);
    return (
        <>
            <p>Contador {cont}</p>    
        <button className='btn btn-primary boton' onClick={() => { if (cont >= 0 && stock>cont) { setCont(cont + 1)}}}>+</button>
        <button className='btn btn-secondary boton botonred'  onClick={() => { if (cont > 0 ) { setCont(cont - 1)}}}>-</button>
        </>
    );
}
export default ItemCount;
    