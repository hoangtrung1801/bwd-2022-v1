import { useDocument } from "swr-firestore-v9";
import { Product } from "../types/Product";

const useProduct = (id: string) => {
    const { data, error } = useDocument<Product>(`products/${id}`);
    console.log(data);
    return {
        product: data,
        isLoading: !error && !data,
        error: error,
    };
};

export default useProduct;
