
const firebaseConfig = {
    apiKey: "AIzaSyCbwifRMTfjUF8wSIUuKmR7wM22BU3d-Cg",
    authDomain:"tokopediaclone-7af5f.firebaseapp.com",
    projectId: "tokopediaclone-7af5f",
    storageBucket: "tokopediaclone-7af5f.appspot.com",
    messagingSenderId: "72962506138",
    appId: "1:72962506138:web:4b91f888d1789a7fd50e23"
  };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



export  const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export  const storage = getStorage(app)