import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import { Product } from "../types/Product";

export default function(product: Product) {
    const dispatch = useAppDispatch();
    dispatch(addToCart(product));
}