import { useState } from "react";
import "./amount-container.css";

interface AmountContainerProps {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const AmountContainer: React.FC<AmountContainerProps> = ({
    amount,
    setAmount,
}) => {
    const increaseAmount = () => {
        setAmount(amount + 1);
    };
    const decreaseAmount = () => {
        if (amount - 1 <= 0) return;
        setAmount(amount - 1);
    };

    return (
        <div className="amount-container is-flex is-align-items-center">
            <button className="button" onClick={decreaseAmount}>
                -
            </button>
            <span>{amount}</span>
            <button className="button" onClick={increaseAmount}>
                +
            </button>
        </div>
    );
};

export default AmountContainer;
