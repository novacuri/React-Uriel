import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { Item } from "../Item/Item";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

//ESTE COMPONENTE SE VA A USAR EN 2 TIPOS DE RUTAS.
// HOME : DONDE NO SE VA A FILTRAR
// CATEGORIAS : DONDE SI SE VA A FILTRAR
export const ItemListContainer = () => {
	// idCategory DEBE COINCIDIR CON EL MISMO NOMBRE EN EL PATH DE LA RUTA DEFINIDA EN APP
	// path='/category/ 👉 :idCategory 👈
	const { idCategory } = useParams();

	//UN ESTADO PARA SIMULAR UNA TARDANZA EN LA CARGA DE DATOS Y MOSTRAR UN COMPONENTE DE CARGA
	// INICIALIZADO EN TRUE PORQUE NO QUEREMOS QUE AL MOMENTO DE MONTARSE ESTE COMPONENTE SE MUESTREN CAMPOS VACIOS o INEXISTENTES
	const [loading, setLoading] = useState(true);

	//ESTADO QUE VOY A UTILIZAR PARA GUARDAR MIS PRODUCTOS, YA SEA SI ESTAN FILTRADOS O NO SEGUN EN LA URL QUE ME ENCUENTRE
	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		//PARA QUE CUANDO CAMBIE LA URL Y SE VUELVE A EJECUTAR EL USEEFFECT SE INICIALE EN TRUE
		setLoading(true);

		if (idCategory === undefined) {
			// AL NO EXISTIR CATEGORIA ( HOME = " / ") MOTRAR TODOS LOS PRODUCTOS
			// AL ESTADO LE ASIGNO TODOS LOS PRODUCTOS
			setMyProducts(products);

			//SIMULO UN RETRASO Y PONGO EL ESTADO DE CARGA EN FALSO LUEGO DE 2 SEGS
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		} else {
			// AL EXISTIR CATEGORIA ES PORUQE ESTAMOS EN UNA URL category/:idCategory
			// TRAER LOS PORDUCTOS YA FILTRADOS POR CATEGORIA
			getItems(idCategory)
				// GUARDO LA RESPUESTA EN EL ESTADO PARA ALMACENAR MIS PRODUCTOS
				.then((response) => setMyProducts(response))
				// DESPUES DE TODO SIMULO UN RETRASO DE 2S PARA YA MOSTRAR LOS PRODUCTOS FILTRADOS
				.finally(
					setTimeout(() => {
						setLoading(false);
					}, 2000)
				);
		}
		// idCategory EN EL ARRAY DE DEPENDENCIA PARA GENERAR UN NUEVO CICLO DEL USEEFFECT AL CAMBIAR ENTRE CATEGORIAS
	}, [idCategory]);

	//ESTA FUNCION DEVUELVE UNA PROMESA CON LOS PRODUCTOS FILTRADOS
	const getItems = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(products.filter((item) => item.category === valueToFilter));
		});
	};

	//SI ESTA CARGANDO
	// MUESTRO EL COMPONENTE LOADING
	// SI NO ESTA CARGANDO
	// YA ME ASEGURO DE TENER LOS PRODUCTOS DISPONIBLES PARA PODER SER RENDERIZADOS
	return loading ? (
		<Loading />
	) : (
		<section className='container--ItemListContainer'>
			{/* TITULO DINAMICO SEGUN LA URL DONDE ESTEMOS */}
			<h2 className='itemListContainer--title'>
				{idCategory === undefined ? "home" : idCategory}
			</h2>

			<div className='container--cards'>
				{/* RECORRO EL ESTADO DONDE GUARDO LOS PRODUCTOS LUEGO DE HABERLOS FILTRADOS O NO  */}
				{myProducts.map((product) => (
					<Item key={product.id} item={product} />
				))}
			</div>
		</section>
	);
};
