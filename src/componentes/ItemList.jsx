import {React, useState, useEffect} from 'react';
import './ItemList.css'
import productos from './AsyncMock'

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
            if(confirmacion) {
                res(productos)
            } else {
                rej("Acceso denegado")
            }
    })
}
const Productos = () => {
    const [getProducts, setProductos] = useState([]);
    useEffect(() => {                  
        consultarPromesa(true)
      
        .then(data => {
            console.log(data)
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-success mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">{producto.Categoria}</div>
                    <div className="card-body">
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Descripcion </a>
                        <p className="card-text">Stock: {producto.stock}</p>
                       
                </div>
            </div>
            )
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    return (
        <div className='row'>
            {getProducts}
        </div>
    );
}
export default Productos;