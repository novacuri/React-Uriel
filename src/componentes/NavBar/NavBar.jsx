import React from "react";
import CartWidget from "./CartWidget";

function Navbar (){
    return (
        <div>
            <h2>Nuestros Productos</h2>
            <ul>
                <li>Bicicletas</li>
                <li>Repuestos</li>
                <li>Accesorios</li>
                <li>Indumentaria</li>
            </ul>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar