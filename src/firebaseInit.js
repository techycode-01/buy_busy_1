// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDP27x6EvMvDiLC1o2Xz7Mw9aXFK4ReEhQ",
  authDomain: "buybusyshop.firebaseapp.com",
  projectId: "buybusyshop",
  storageBucket: "buybusyshop.appspot.com",
  messagingSenderId: "276519137857",
  appId: "1:276519137857:web:7de4a5593c5757c78e0cc0"
=======
  apiKey: "AIzaSyAaNkXAO_4dbRcrPPCzjkMc-HNIh-sBF54",
  authDomain: "buybusy-91d38.firebaseapp.com",
  projectId: "buybusy-91d38",
  storageBucket: "buybusy-91d38.appspot.com",
  messagingSenderId: "574413063541",
  appId: "1:574413063541:web:20a5e900a918f6a7887f3c"
>>>>>>> d2a94b8a73d87741432bd67541a579bf9b994507
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


