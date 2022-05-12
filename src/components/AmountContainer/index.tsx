import { useState } from 'react';
import './amount-container.css';

const AmountContainer = () => {

    const [amount, setAmount] = useState(0);
    const increaseAmount = () => {
        setAmount(amount+1);
    }
    const decreaseAmount = () => {
        setAmount(amount-1);
    }

    return (
        <div className="amount-container is-flex is-align-items-center">
            <button className='button' onClick={decreaseAmount}>-</button>
            <span>{amount}</span>
            <button className='button' onClick={increaseAmount}>+</button>
        </div>
    )
}

export default AmountContainer;