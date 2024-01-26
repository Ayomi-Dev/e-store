import { initializeApp } from 'firebase/app'; 
import { getFirestore, getDocs, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { productsData } from './assets/data/ProductData';


export const  datas = []

const firebaseConfig = {
    apiKey: "AIzaSyCfWEKF7kaaWGjwuQ4DZcpmQBNSHftuCGc",
    authDomain: "ecommerce-store-11a26.firebaseapp.com",
    projectId: "ecommerce-store-11a26",
    storageBucket: "ecommerce-store-11a26.appspot.com",
    messagingSenderId: "188292644239",
    appId: "1:188292644239:web:5be39fcb7eed98a2d29ffa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();

const colRef = collection(db, 'products');

const addProductsToFirestore = async () => {

  try {
    for(const product of productsData) {
      await addDoc(colRef, product)
    }
  } 
  catch (error) {
    console.log(error.message)
  }
}

// addProductsToFirestore();

// const retrieveProductsFromFirestore = async () => {
//     const querySnapshot = await getDocs(colRef);
//     const products = [];

//     querySnapshot.forEach((doc) => {
//       const items = doc.data()
//       products.push(items)
//     })

//     return products
// }

// retrieveProductsFromFirestore()
// .then((snapshot) => {
//   datas.push(...snapshot)
//   console.log(snapshot)
// })
// .catch(error => {
//   console.log('error retrieving data:', error.message)
// })