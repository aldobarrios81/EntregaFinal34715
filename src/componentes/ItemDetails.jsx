import {React, useState, useEffect} from 'react';
import './ItemDetails.css'
import productos from '../DATA/productos'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';

console.log(useParams)
function consultarPromesa(confirmacion) {
    return new Promise ((res) => {
            if(confirmacion) {
                setTimeout(() => {
                res(productos)
            }, 1)
            } 
    })
}


const Productos = () => {
    const [producto, setProductoCard] = useState([]);
    const {id} = useParams()
    console.log(id)
 
    useEffect(() => {                  
        consultarPromesa(true)
        .then(data => {
          console.log()
          const producto1 = data.find(producto => producto.id == id)
          console.log(producto1)
          setProductoCard(producto1)
       
      })
    }, []);
    return (
      <>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
         <div className="row g-0">
             <div className="col-md-4">
                 <img src={"/img/"+ producto.image} className='ItemDetailsImage' />
             </div>
         <div className="col-md-8">
             <div className="card-body">
                 <h5 className="card-title">{producto.Categoria}</h5>
                 <p className="card-text">Marca: {producto.marca} </p>
                 <p className="card-text">Stock: {producto.stock} </p>
                 <p className="card-text">Precio: ${producto.precio} </p>
                 <ItemCount />
                 <button className='btn btn-dark'>Add</button>
             </div>
         </div>
     </div>
     </div>
     </>
    );
}
export default Productos;