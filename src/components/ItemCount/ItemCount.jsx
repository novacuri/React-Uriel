import { useState } from "react";
import "./itemCount.css";


export const ItemCount = ({ stock }) => {
	
	const [initial, setInitial] = useState(1);
	const [errorStock, setErrorStock] = useState(false);
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
