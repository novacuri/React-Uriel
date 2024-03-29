import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar/Navbar";

import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import { getItems } from "./services/firebase";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  getItems();
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar
          onNavigate={(ruta) => console.log("Estas navegando a la ruta", ruta)}
        />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailContainer />} />
          <Route path="/contacto/" element={<Contacto />} />

          <Route path="/cart" element={<CartContainer />} />
          <Route path="/thankyou/:orderID" element={<ThankYou />} />
          <Route path="*" element={<h1>404: Recurso no encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
