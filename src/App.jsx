import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/footer';

// import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <>
    <NavBar/>
    {<ItemListContainer greeting="Bienvenidos a Tequilas Mexico"/>}
    <Footer />
    </>
  );
}

export default App;
