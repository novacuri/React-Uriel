import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { Item } from "../Item/Item";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

<<<<<<< HEAD
export const ItemListContainer = () => {

  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);
  const [myProducts, setMyProducts] = useState();

  useEffect(() => {
      setLoading(true);

    if (idCategory === undefined) {
        setMyProducts(products);
        setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
        getItems(idCategory)
        .then((response) => setMyProducts(response))
        .finally(
          setTimeout(() => {
          setLoading(false);
          }, 2000)
        );
    }

  }, [idCategory]);


  const getItems = (valueToFilter) => {
    return new Promise((resolve) => {
      resolve(products.filter((item) => item.category === valueToFilter));
    });
  };


  return loading ? (
    <Loading />
  ) : (
    <section className="container--ItemListContainer">
      {}
      <h2 className="itemListContainer--title">
        {idCategory === undefined ? "home" : idCategory}
      </h2>

      <div className="container--cards">
        {}
        {myProducts.map((product) => {
         return (
			<Item
				key={product.id}
				id={product.id}
				stock={product.stock}
				title={product.title}
				img={product.img}
				description={product.description}
				price={product.price}
				category={product.category}
			/>
		);
        })}
      </div>
    </section>
  );
=======

export const ItemListContainer = () => {
	const { idCategory } = useParams();
	const [loading, setLoading] = useState(true);
	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		setLoading(true);

		if (idCategory === undefined) {
		setMyProducts(products);
		setTimeout(() => {
		setLoading(false);
			}, 2000);
		} else {
			
			getItems(idCategory)
				.then((response) => setMyProducts(response))
				.finally(
				setTimeout(() => {
				setLoading(false);
					}, 2000)
				);
		}
		}, [idCategory]);

		const getItems = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(products.filter((item) => item.category === valueToFilter));
		});
	};

	return loading ? (
		<Loading />
	) : (
		<section className='container--ItemListContainer'>
			{}
			<h2 className='itemListContainer--title'>
				{idCategory === undefined ? "home" : idCategory}
			</h2>

			<div className='container--cards'>
				{}
				{myProducts.map((product) => (
					<Item key={product.id} item={product} />
				))}
			</div>
		</section>
	);
>>>>>>> 2e4e3ab411351c322e1ca47c7b611531074e8f4a
};
