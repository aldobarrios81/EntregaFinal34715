import React from 'react';

import './ItemListContainer.css' 
import Productos from './ItemList'
import Products from './ItemDetails'
const ItemListContainer = (props) => {  /// definimos las props, que seria los parametros de nuestra funcion ItemListContainer. props es un objeto
  return (
    <div>
   <h1>{props.greeting}</h1>  
    {<Productos />}
    </div>
  );
};
export default ItemListContainer; 
