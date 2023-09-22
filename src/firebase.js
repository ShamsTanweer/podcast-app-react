// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkmdcryoUM9G-kK1cmsmpva5D4AgULaM",
  authDomain: "podcast-app-react-23702.firebaseapp.com",
  projectId: "podcast-app-react-23702",
  storageBucket: "podcast-app-react-23702.appspot.com",
  messagingSenderId: "883711697927",
  appId: "1:883711697927:web:667a8e233f0ec4c01876a2",
  measurementId: "G-6L9H2625K7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
