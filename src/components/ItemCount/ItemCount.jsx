import { useState } from "react";
import "./itemCount.css";


export const ItemCount = ({ stock }) => {
<<<<<<< HEAD
	
	const [initial, setInitial] = useState(1);
	const [errorStock, setErrorStock] = useState(false);
=======

	const [initial, setInitial] = useState(1);


	const [errorStock, setErrorStock] = useState(false);


>>>>>>> 2e4e3ab411351c322e1ca47c7b611531074e8f4a
	const handleClick = (value) => {
		if (initial + value > 0 && initial + value <= stock) {
			setInitial(initial + value);
			setErrorStock(false);
		} else {
			initial + value >= stock && setErrorStock(true);
		}
	};

	return (
		<div className='container--itemCount'>
			<div className='container--itemCount--buttons'>
				<button
					className='itemCount--button'
					onClick={() => handleClick(-1)}>
					-
				</button>
				<div className='itemCount--count'>{initial}</div>
				<button
					className='itemCount--button'
					onClick={() => handleClick(1)}>
					+
				</button>
			</div>
			<button className='itemCount--buttonCart'>Add to Cart</button>
			{errorStock && (
				<div className='itemCount--error'>
					Se alcanzo el máximo disponible
				</div>
			)}
		</div>
	);
};
