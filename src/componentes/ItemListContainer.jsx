import React from 'react';
import ItemCount from './ItemCount';
import './ItemListContainer.css'
const ItemListContainer = (props) => {  /// definimos las props, que seria los parametros de nuestra funcion ItemListContainer. props es un objeto
  return (
    <div>
   <h1>{props.greeting}</h1>  
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
  <div className="card-header">Producto X001</div>
  <div className="card-body">
    
    <h4 className="card-title">Tequila Don Julio</h4>
    <img className="ImgFormat"src="img/Tequila.jpg" alt="" />
    <h4 className="card-title">Stock = 5</h4>
   {<ItemCount />}
  
  </div>
</div>

    </div>



    
  );
};
export default ItemListContainer; 
