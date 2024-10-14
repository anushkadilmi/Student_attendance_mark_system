import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoOfRK9kZ3E8Ur4ewJBRyy4mFk7mBCTcg",
  authDomain: "studentattendance-19eb5.firebaseapp.com",
  projectId: "studentattendance-19eb5",
  storageBucket: "studentattendance-19eb5.appspot.com",
  messagingSenderId: "254243832302",
  appId: "1:254243832302:web:fe5e1790a52a56687cceff"
};


const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);
const auth = getAuth(app); 

export { auth, firestore };
