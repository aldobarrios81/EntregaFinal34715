import {React, useState, useEffect} from 'react';
import './ItemList.css'
import productos from '../DATA/productos'
import {Link} from 'react-router-dom'

function consultarPromesa(confirmacion) {
    return new Promise ((res) => {
            if(confirmacion) {
                setTimeout(() => {
                res(productos)
            }, 20)
            } 
    })
}
const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {                  
        consultarPromesa(true)
      
        .then(data => {
          
        const productosJSX = data.map((producto, indice) => 
            <div className="card border-success mb-3" key={indice} style={{maxWidth: '15rem', margin: '5px'}}>
                <div className="card-header">Codigo Producto: 000{producto.id}</div>
                    <div className="card-body">
                        <p className="card-text">Marca: {producto.marca}</p>
                        <img src={"./img/" + producto.image} className='card-img-top' alt="" />
                        <p className="card-text">Precio: ${producto.precio}</p>
                       
                        <button className='btn btn-primary'><Link className='nav-link' to={"/productos/" + producto.id}>Ver</Link> </button>
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
            {productos}
        </div>
    );
}
export default Productos;