
import products from "../data/products";



export function getItemsCategory(categoryID) {
  return new Promise((resolve, reject) => {
    let itemsFound = products.filter((item) => {
      return item.category === categoryID;
    });

    if (itemsFound.length > 0) resolve(itemsFound);
    else reject("No hay productos para esta categoría.");
  });
}

