import {React, useState} from 'react'

const ItemCount = ({stock=5}) => {
    const [cont, setCont] = useState(0);
    return (
        <>
            <p>Contador {cont}</p>
            
    <button className='btn btn-primary' onClick={() => { if (cont >= 0 && stock>cont) { setCont(cont + 1)}}}>
     +
    </button>


    <button className='btn btn-secondary'  onClick={() => { if (cont > 0 ) { setCont(cont - 1)}}}>
     -
    </button>

        </>
    );
}

export default ItemCount;
