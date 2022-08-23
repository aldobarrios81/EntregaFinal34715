import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import ItemCount from './componentes/ItemCount'
// import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>
    <ItemCount/>
    <ItemListContainer />
    {<ItemListContainer greeting="Bienvenidos a Bakery"/>}
    </>
  );
}

export default App;
