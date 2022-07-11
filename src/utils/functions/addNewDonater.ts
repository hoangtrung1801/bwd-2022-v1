import { addDoc } from "firebase/firestore";
import { collectionDonater } from "../../firebase";
import Donater from "../types/Donater";

const addNewDonater = async (data: Donater) => {
    addDoc(collectionDonater, data).then(ref => {
        console.log('add success ', ref.id);
    })
}

export default addNewDonater;