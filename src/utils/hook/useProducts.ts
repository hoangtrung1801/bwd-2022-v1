import { useCollection } from "swr-firestore-v9";
import { Product } from "../types/Product";

const useProducts = () => {
    const { data, error } = useCollection<Product>("products");
    return {
        products: data,
        isLoading: !error && !data,
        error: error,
    };
};

export default useProducts;
