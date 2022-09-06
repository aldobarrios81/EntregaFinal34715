import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/footer';
import ItemDetails from './componentes/ItemDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import productos from './DATA/productos'
// import ItemListContainer from './Components/ItemListContainer'

function App() {

  return (
    <>
     <NavBar/>  
    <BrowserRouter>
         <Routes>
            <Route path="/"  element={<ItemListContainer greeting="Bienvenidos a Tequilas Mexico"/>} />
            <Route path="/productos/:id" element={<ItemDetails/>}></Route>
        
         </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
