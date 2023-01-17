import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";

export const Item = (props) => {
	
	return (
		<div className="card">
			<h3 className="card--title">{props.title}</h3>
			<img
				className="card--img"
				src={require("../../img/" + `${props.img}` + ".JPG")}
				alt={props.title}
			/>
			<div className="card--price">$ {props.price}</div>
			<ItemCount stock={props.stock} />
			<Link className="card--more" to={`/items/${props.id}`}>
				Ver Mas
			</Link>
		</div>
	);
};
