import { initializeApp } from 'firebase/app';

import {getFirestore, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfWEKF7kaaWGjwuQ4DZcpmQBNSHftuCGc",
    authDomain: "ecommerce-store-11a26.firebaseapp.com",
    projectId: "ecommerce-store-11a26",
    storageBucket: "ecommerce-store-11a26.appspot.com",
    messagingSenderId: "188292644239",
    appId: "1:188292644239:web:5be39fcb7eed98a2d29ffa"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)