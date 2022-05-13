import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import {collection, getFirestore} from 'firebase/firestore';

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyDNMrVuhVFP8JY98L7FWnMzq23VSCX5iJg",
  authDomain: "bwd-2022.firebaseapp.com",
  projectId: "bwd-2022",
  storageBucket: "bwd-2022.appspot.com",
  messagingSenderId: "478205951443",
  appId: "1:478205951443:web:4968b9d23ca67963490326",
  measurementId: "G-TFKJ9JPZBX"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
const imagesRef = ref(storage, 'images');

const db = getFirestore(firebaseApp);
const collectionProdutcs = collection(db, 'products');

export {imagesRef, db, collectionProdutcs};
export default storage;