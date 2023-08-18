import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBUhX-KLsGmJt01N7hYUym5GHQLkYIRkbs",
    authDomain: "rough-project-e7800.firebaseapp.com",
    projectId: "rough-project-e7800",
    storageBucket: "rough-project-e7800.appspot.com",
    messagingSenderId: "310510131684",
    appId: "1:310510131684:web:c882d6474577ad234f4ff1"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export{
    app,
    db,
    auth
  }