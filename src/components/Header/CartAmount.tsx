import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";

interface CartAmountProps {

}

const CartAmount: React.FC<CartAmountProps & React.HTMLProps<'div'>> = ({className}) => {
    const products = useAppSelector(state => state.cart.items);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(products.length);
    }, [products]);

    return (
        <div className={ `cart-amount ${className && className}` }>
            <span>{amount}</span>
        </div>
    );
};

export default CartAmount;
