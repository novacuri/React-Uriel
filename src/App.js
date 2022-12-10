import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from './componentes/NavBar/NavBar'; 
import ClickCount from "..src/componentes/ClickCount/ClickCount" 

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
</>
  );
}

/* export default App; */

export default function App()
return(
  <div>
  <h1>"Elegi tu bicicleta"</h1>
  <ClickCount stock="6"/>
  </div>
)

