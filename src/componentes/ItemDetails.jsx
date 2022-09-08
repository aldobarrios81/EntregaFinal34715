import {React, useState, useEffect} from 'react';
import './ItemDetails.css'
import productos from '../DATA/productos'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';

function consultarPromesa(confirmacion) {
    return new Promise ((res) => {
            if(confirmacion) {
                setTimeout(() => {
                res(productos)
            }, 2000)
            } 
    })
}

const Productos = () => {
    const [cantidad, setCantidad] = useState(1);
    const [producto, setProductoCard] = useState([]);
    const {id} = useParams()
 


    useEffect(() => {                  
        consultarPromesa(true)
        .then(data => {
          const producto1 = data.find(producto => producto.id == id)
  
          setProductoCard(producto1)
        
       
      })
    }, [id]);
    const cantidadProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto.stock) {
                setCantidad(cantidad + 1)
            }
        } else {
            if(cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    const agregarAlCarrito=(producto, cantidad) => {
    
        const productoCarrito = {id: producto.id, cantidad: cantidad} 
        console.log(productoCarrito)
    }

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
                 <p>cantidad: {cantidad}</p>
                 <button className='btn btn-primary boton' onClick={() => cantidadProducto("+")}> +</button>
                 <button className='btn btn-secondary boton botonred'  onClick={() => cantidadProducto("-")}>-</button>
                 
                 <button className='btn btn-dark' onClick={() => agregarAlCarrito(producto, cantidad)}>Add</button>
             </div>
         </div>
     </div> 
     </div>
     </>
    );
}
export default Productos;