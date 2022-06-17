import { getDocs } from "firebase/firestore";
import { collectionDonater } from "../../firebase";
import Donater from "../types/Donater";

const getDonater = async () => {
    const querySnapshot = await getDocs(collectionDonater);
    let donaters : Donater[] = [];
    querySnapshot.forEach((doc) => {
        donaters.push({...doc.data()} as Donater);
    })
    return donaters;
}

export default getDonater;