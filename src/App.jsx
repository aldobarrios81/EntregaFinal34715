
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
// import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer />
    {<ItemListContainer greeting="Bienvenidos a Bakery"/>}
    </>
  );
}

export default App;
