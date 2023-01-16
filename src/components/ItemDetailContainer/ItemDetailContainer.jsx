import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/items";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {

	const [itemFiltered, setItemFiltered] = useState(null);
	const [loading, setLoading] = useState(true);
	const { idItem } = useParams();

	useEffect(() => {
		setLoading(true);
		getItem(idItem) 
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
				setLoading(false);
				}, 2000)
			);
	}, [idItem]);
	const getItem = (valueToFilter) => {
		return new Promise((resolve) => {
		resolve(products.find((item) => item.id === Number(valueToFilter)));
		});
	};
	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
