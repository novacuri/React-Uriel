import { createContext } from "react";


const cartContext = createContext({ cart: [] });


const Provider = cartContext.Provider;



function CartContextProvider(props){
   
    let cart = [];
    let saludo = "hola desde context"

    return(
        <Provider value={ {cart: cart, saludo: saludo} }>
             {props.children}
        </Provider>
    )
}

export { cartContext, CartContextProvider };