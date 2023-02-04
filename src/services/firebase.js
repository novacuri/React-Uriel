import { write } from "@popperjs/core";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  documentId,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrg0qCrh6nn0xgFw9I8ROYzspUnmJfyxg",
  authDomain: "uriel-entrega-final.firebaseapp.com",
  projectId: "uriel-entrega-final",
  storageBucket: "uriel-entrega-final.appspot.com",
  messagingSenderId: "315018925532",
  appId: "1:315018925532:web:23e2d66c7940e0582beb19"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getSingleItem(id) {
  //1. referencia
  let docRef = doc(DB, "products", id);

  //2. obtenemos la respuesta async de getDoc
  let docSnapshot = await getDoc(docRef);

  //3. retornamos la respuesta.data()
  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

  /* let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  }); */

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function createBuyOrder(order) {
  const colectionRef = collection(DB, "orders");

  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
  const colectionRef = collection(DB, "orders");
  const colectionProductsRef = collection(DB, "products");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(colectionProductsRef, where(documentId(), "in", arrayIds));
  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;

    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    if (stockDispoible < countItemInCart)
      throw new Error(
        `Stock no disponible para el producto para el producto ${doc.id}`
      );
    else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
  });

  await batch.commit();
  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}
