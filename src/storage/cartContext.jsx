import { createContext, useState } from "react";

//1. inicializamos nuestro Context
const cartContext = createContext({ cart: [] });

//2. Extraemos el componente Provider
const Provider = cartContext.Provider;

//4. creamos nuesro propio Provider
function CartContextProvider(props) {
  //3. Creamos un estado
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
      //const newCart = cart.map( item => item )

      /*  const newItem = item;
            newItem.count = count; */
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

  //[ { title: iphone, count: 5}, {title: "hp", count: 15}]
  let totalItemsInCart = 0;
  cart.forEach((item) => (totalItemsInCart += item.count));

  function totalItemsInCartfn() {
    let totalItemsInCart = 0;
    cart.forEach((item) => (totalItemsInCart += item.count));
    return totalItemsInCart;
  }

  // function removeItem(id) -> filter

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

  // function emptyCart() -> []
  function emptyCart() {
		setCart([]);
	}


  // totalPriceInCart() -> $$
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

