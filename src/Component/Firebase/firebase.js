import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJB5rGXT2Q4kFLSbUBvPIBmThqlbW09_I",
  authDomain: "mynotes-69741.firebaseapp.com",
  databaseURL: "https://mynotes-69741-default-rtdb.firebaseio.com",
  projectId: "mynotes-69741",
  storageBucket: "mynotes-69741.appspot.com",
  messagingSenderId: "424807925398",
  appId: "1:424807925398:web:e001917e429b820a0764b7",
  measurementId: "G-9K003YSHXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export {DB}