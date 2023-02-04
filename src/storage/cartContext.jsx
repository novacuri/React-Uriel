import { createContext, useState } from "react";


const cartContext = createContext({ cart: [] });


const Provider = cartContext.Provider;


function CartContextProvider(props) {
  
  const [cart, setCart] = useState([]);

  let saludo = "hola desde context";

  function addToCart(item, count) {
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    let isItemInCart = indexItemInCart !== -1;
    const newCart = [...cart];

    if (isItemInCart) {
      newCart[indexItemInCart].count += count;
      setCart(newCart);
    } else {
  
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

 
  let totalItemsInCart = 0;
  cart.forEach((item) => (totalItemsInCart += item.count));

  function totalItemsInCartfn() {
    let totalItemsInCart = 0;
    cart.forEach((item) => (totalItemsInCart += item.count));
    return totalItemsInCart;
  }

  

  function removeItem(id) {
		let itemInCartID = cart.findIndex(
			(itemInContext) => itemInContext.id === id
		);

		const newCart = [...cart];

		if (itemInCartID !== -1) {
			newCart.splice(itemInCartID, 1);
			setCart(newCart);
		} else {
			console.error(
				"Item no encontrado en el carrito."
			);
		}
	}

  
  function emptyCart() {
		setCart([]);
	}


 
  function totalPriceInCart() {
		return cart.reduce((acc, item) => acc + item.count * item.price, 0);
	}
  return (
    <Provider
      value={{
        cart,
        saludo,
        addToCart,
        totalItemsInCart,
        totalItemsInCartfn,
        totalPriceInCart,
        emptyCart,
        removeItem,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { cartContext, CartContextProvider };

