import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwuQ4zZNDQScvVVF1m0edi5KRguEPFtWA",
  authDomain: "chatgpt-clone-61dbd.firebaseapp.com",
  projectId: "chatgpt-clone-61dbd",
  storageBucket: "chatgpt-clone-61dbd.appspot.com",
  messagingSenderId: "1046628360776",
  appId: "1:1046628360776:web:8180960daf732285bdae7d",
  measurementId: "G-Z2ZER37SK5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig, 'app1');
//const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};