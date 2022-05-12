import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";

const CartAmount: React.FC = () => {
    const products = useAppSelector(state => state.cart.items);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(products.length);
    }, [products]);

    return (
        <div className="cart-amount">
            <span>{amount}</span>
        </div>
    );
};

export default CartAmount;
