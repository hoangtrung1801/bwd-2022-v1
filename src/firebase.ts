import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import useToken from "./utils/hook/useToken";

// Set the configuration for your app
// TODO: Replace with your app's config object
// const firebaseConfig = {
//     apiKey: "AIzaSyDNMrVuhVFP8JY98L7FWnMzq23VSCX5iJg",
//     authDomain: "bwd-2022.firebaseapp.com",
//     projectId: "bwd-2022",
//     storageBucket: "bwd-2022.appspot.com",
//     messagingSenderId: "478205951443",
//     appId: "1:478205951443:web:4968b9d23ca67963490326",
//     measurementId: "G-TFKJ9JPZBX",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCkj7Lc9jfhzFzKLPnjUyqcUTJ44KMR5qI",
  authDomain: "bwdd-3dc88.firebaseapp.com",
  projectId: "bwdd-3dc88",
  storageBucket: "bwdd-3dc88.appspot.com",
  messagingSenderId: "487427224978",
  appId: "1:487427224978:web:969bf089165dae6d923d4b",
  measurementId: "G-8N2XVGEM1B"
};


const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
const imagesRef = ref(storage, "images");

const db = getFirestore(firebaseApp);
const collectionProdutcs = collection(db, "products");
const collectionUsers = collection(db, "users");
const collectionDonater = collection(db, "donater");

export { imagesRef, db, collectionProdutcs, collectionUsers, collectionDonater };

// Authentication
export const auth = getAuth();
onAuthStateChanged(auth, user => {
    if(user) {
        console.log('sign in');
    } else {
        console.log('sign out');
    }
})

export default storage;