import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
	return (
		<div className='container--app'>
			{}
			<BrowserRouter>
				{}
				<Navbar />

				{}
				<Routes>
					{}
					<Route path='/' element={<ItemListContainer />} />

					{}
					<Route
						path='/category/:idCategory'
						element={<ItemListContainer />}
					/>
					<Route
						path='/items/:idItem'
						element={<ItemDetailContainer />}
					/>
				</Routes>

				{}
			</BrowserRouter>
		</div>
	);
}

export default App;
