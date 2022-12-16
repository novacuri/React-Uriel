import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className='container--app'>
			{/* IMPORTAR BROWSERROUTER DE react-router-dom( instalar con 👉 npm i react-router-dom)*/}
			<BrowserRouter>
				{/* TODOS LOS COMPONENTES FUERA DE LA ETIQUETA ROUTES SON LOS QUE VAN A PERSISTIR EN LA NAVEGABILIDAD  Ej: Navbar , footer , etc (los comunes a todas las paginas)*/}
				<Navbar />

				{/* 👇 ACA SE DEFINEN TODAS LAS RUTAS QUE VA A TENER EL PROYECTO, DENTRO DE ROUTES */}
				<Routes>
					{/* DEFINIR TODAS LAS RUTAS DESEADAS , CON PATH QUE ES A DONDE VA A APUNTAR LA URL Y ELEMENT ES EL COMPONENTE QUE SE VA A RENDERIZAR */}
					<Route path='/' element={<ItemListContainer />} />

					{/* EN PATH PODEMOS TENER 👉 :NOMBRE  , EL : SIGNIFICA QUE EL VALOR :NOMBRE VA A VARIAR.  EJ :idCategory, idCategory son todas las categorias de mi app */}
					<Route
						path='/category/:idCategory'
						element={<ItemListContainer />}
					/>
					<Route
						path='/items/:idItem'
						element={<ItemDetailContainer />}
					/>
				</Routes>

				{/* ACA TAMBIEN PUEDE IR COMPONENTES PERSISTENTES EN TODA LA NAVEGABILIDAD Ej FOOTER */}
			</BrowserRouter>
		</div>
	);
}

export default App;
