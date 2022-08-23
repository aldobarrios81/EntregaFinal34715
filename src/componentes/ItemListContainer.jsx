import React from 'react';
const ItemListContainer = (props) => {  /// definimos las props, que seria los parametros de nuestra funcion ItemListContainer. props es un objeto
  return (
    <div>
      <h1>{props.greeting}</h1>   
    </div>
  );
};
export default ItemListContainer;
