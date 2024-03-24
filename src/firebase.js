import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSgOwWvriZqDO0CbIFwdoREbpgX3NQRhk",
  authDomain: "portfolio-21602.firebaseapp.com",
  projectId: "portfolio-21602",
  storageBucket: "portfolio-21602.appspot.com",
  messagingSenderId: "636449779844",
  appId: "1:636449779844:web:facd40273745396ec6d2d1"
};

export const app = initializeApp(firebaseConfig);
export const db= getFirestore()