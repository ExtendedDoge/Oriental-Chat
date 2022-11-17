import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWOJz1jz0VzNvJY72YDtcOjctuT6XQurE",
    authDomain: "chat-97d2b.firebaseapp.com",
    projectId: "chat-97d2b",
    storageBucket: "chat-97d2b.appspot.com",
    messagingSenderId: "728606061549",
    appId: "1:728606061549:web:4540bfe793e71720ee6de4"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()