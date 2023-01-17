import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
<<<<<<< HEAD
		const [itemFiltered, setItemFiltered] = useState(null);
		const [loading, setLoading] = useState(true);
		const { idItem } = useParams();

	useEffect(() => {
	
		setLoading(true);

=======

	const [itemFiltered, setItemFiltered] = useState(null);
	const [loading, setLoading] = useState(true);
	const { idItem } = useParams();

	useEffect(() => {
		setLoading(true);
>>>>>>> 2e4e3ab411351c322e1ca47c7b611531074e8f4a
		getItem(idItem) 
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
				setLoading(false);
				}, 2000)
			);
	}, [idItem]);
<<<<<<< HEAD

	
=======
>>>>>>> 2e4e3ab411351c322e1ca47c7b611531074e8f4a
	const getItem = (valueToFilter) => {
		return new Promise((resolve) => {
		resolve(products.find((item) => item.id === Number(valueToFilter)));
		});
	};
<<<<<<< HEAD

=======
>>>>>>> 2e4e3ab411351c322e1ca47c7b611531074e8f4a
	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
