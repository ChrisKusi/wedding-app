import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYAVj1unhr2AW_vdpLA2FHJxu90p7L5rg",
    authDomain: "wedding-dc137.firebaseapp.com",
    projectId: "wedding-dc137",
    storageBucket: "wedding-dc137.firebasestorage.app",
    messagingSenderId: "901554843700",
    appId: "1:901554843700:web:3bac8eade211ee9f635a61"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
