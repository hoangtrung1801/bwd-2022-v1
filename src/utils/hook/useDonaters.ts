import { useCollection } from "swr-firestore-v9";
import Donater from "../types/Donater";

const useDonaters = () => {
    const { data, error } = useCollection<Donater>("donater");
    return {
        donaters: data,
        isLoading: !error && !data,
        error: error,
    };
};

export default useDonaters;
