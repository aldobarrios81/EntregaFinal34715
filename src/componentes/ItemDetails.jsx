import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'

const Producto = () => {
    const [producto, setProductoCard] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(data => {
            const producto1 = data.find(producto => producto.id == id)
            setProductoCard(producto1)
        })
     
    }, []);

    return (
       
        <>
         <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../img/"+ producto.image} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.Categoria}</h5>
                    <p className="card-text">Marca: {producto.marca} </p>
                    <p className="card-text">Modelo: {producto.stock} </p>
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

export default Producto;
