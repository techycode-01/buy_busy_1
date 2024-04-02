// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP27x6EvMvDiLC1o2Xz7Mw9aXFK4ReEhQ",
  authDomain: "buybusyshop.firebaseapp.com",
  projectId: "buybusyshop",
  storageBucket: "buybusyshop.appspot.com",
  messagingSenderId: "276519137857",
  appId: "1:276519137857:web:7de4a5593c5757c78e0cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


