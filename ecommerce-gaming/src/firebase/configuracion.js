
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDh48YKZYjNbS2gZciUrtnkdh3E67Hvgd0",
  authDomain: "tienda-ecommerce1.firebaseapp.com",
  projectId: "tienda-ecommerce1",
  storageBucket: "tienda-ecommerce1.appspot.com",
  messagingSenderId: "283928284596",
  appId: "1:283928284596:web:ebcf83841caf3bdd8476e1"
};


const app = initializeApp(firebaseConfig);
export const firestoreInit = () => app