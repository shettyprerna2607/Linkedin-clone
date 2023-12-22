import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAf0mBr0ZUCo77DPFRHt2Lj-92obI0ign4",
  authDomain: "linkedin-4eb28.firebaseapp.com",
  projectId: "linkedin-4eb28",
  storageBucket: "linkedin-4eb28.appspot.com",
  messagingSenderId: "499697275891",
  appId: "1:499697275891:web:38faa936d0c7006b40b886"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

