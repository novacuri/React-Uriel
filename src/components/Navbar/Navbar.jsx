import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className='container--navbar'>
			{/* LOGO */}
			<Link to='/' className='navbar--logo'>
				🪐
			</Link>

			{/* Secciones de la navbar */}
			<ul className='navbar--ul'>
				<li className='navbar--ul--li'>
					<Link to='/category/MTB' className='navbar--ul--li--a'>
						MTB
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/category/Ruta' className='navbar--ul--li--a'>
						Ruta
					</Link>
				</li>
				<li className='navbar--ul--li'>
					<Link to='/category/Triatlon' className='navbar--ul--li--a'>
						Triatlon
					</Link>
				</li>
			</ul>

			{/* ICON CART + Cantidad */}
			<CartWidget />
		</nav>
	);
};
