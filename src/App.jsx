import React from 'react'
import './App.css';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/footer';
import ItemDetails from './componentes/ItemDetails'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
  
     <Navbar/>  
     <BrowserRouter>
         <Routes>
            <Route exact path="/"  element={<ItemListContainer greeting="Bienvenidos a Tequilas Mexico"/>} />
            <Route exact path="/item/:id" element={<ItemDetails/>}></Route>  
            <Route exact path="/Categoria/:Categoria" element={<ItemListContainer/>}></Route>  
       
         </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
