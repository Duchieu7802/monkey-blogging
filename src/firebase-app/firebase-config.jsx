import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyAv-Lb7Grmvci4f9NsUao3GsBnv2eQ1j04",
	authDomain: "monkey-blogging-66a91.firebaseapp.com",
	projectId: "monkey-blogging-66a91",
	storageBucket: "monkey-blogging-66a91.appspot.com",
	messagingSenderId: "648782233344",
	appId: "1:648782233344:web:3f680767dfd8c3cc77fde5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
