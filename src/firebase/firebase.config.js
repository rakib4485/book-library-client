// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,

apiKey: "AIzaSyA98-PbQxhTjW1UF5IoQ11SBHcZ20oD8tk",

  authDomain: "book-library-37796.firebaseapp.com",

  projectId: "book-library-37796",

  storageBucket: "book-library-37796.appspot.com",

  messagingSenderId: "802448887026",

  appId: "1:802448887026:web:30becc38c9e558c9af546b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;