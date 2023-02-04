
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCrg0qCrh6nn0xgFw9I8ROYzspUnmJfyxg",
  authDomain: "uriel-entrega-final.firebaseapp.com",
  projectId: "uriel-entrega-final",
  storageBucket: "uriel-entrega-final.appspot.com",
  messagingSenderId: "315018925532",
  appId: "1:315018925532:web:23e2d66c7940e0582beb19"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)
function getDocument (){
let id = "0aIKSG5t24N4wKQrDyU2";
let docRef = doc(DB; "products", id)

getDoc(docRef)
}

