import {React, useState} from 'react'

const ItemCount = () => {
    const [cont, setCont] = useState(0);
    return (
        <>
            <p>
    Contador {cont}
   </p>
    <button className='btn btn-primary' onClick={() => setCont(cont + 1)}>
     +
    </button>
    <button className='btn btn-secondary'  onClick={() => setCont(cont - 1)}>
     -
    </button>
        </>
    );
}

export default ItemCount;
