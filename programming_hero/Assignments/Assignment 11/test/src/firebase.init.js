// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDNi2VyEvxMQcWIDRGW0wVs82X5BigU1I",
  authDomain: "test-cc821.firebaseapp.com",
  projectId: "test-cc821",
  storageBucket: "test-cc821.appspot.com",
  messagingSenderId: "37948211003",
  appId: "1:37948211003:web:7f756e5cf3d2411d1c011e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app