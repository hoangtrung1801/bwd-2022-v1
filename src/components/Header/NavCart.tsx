import { useState } from "react";
import Button1 from "../Button/Button1";
import Button3 from "../Button/Button3";

interface NavCartProps {
    isCartShow: boolean
}

const NavCart : React.FC<NavCartProps> = ({isCartShow}) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="nav-cart-wrapper">
            <div className={`nav-cart has-shadow px-5 py-4 ${isCartShow || hover ? "nav-cart-show" : ""}`} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className="nav-cart-header is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                    <h3>shopping bag</h3>
                    <p>(3 items)</p>
                </div>

                <hr />

                <div className="nav-cart-list">
                    <div className="nav-cart-list-item">
                        <div className="item-image-wrapper">
                            <div className="item-image">
                                <img src="https://picsum.photos/200/300" />
                            </div>
                        </div>
                        <div className="item-content">
                            <h6 className="item-name">abcde</h6>
                            <p className="item-description">ghikl</p>
                            <div className="item-option is-flex is-align-items-center">
                                <div className="item-amount">
                                    <span>-</span>
                                    <span>2</span>
                                    <span>+</span>
                                </div>
                                <div className="item-price is-size-7">
                                    <span>$100</span>
                                </div>
                            </div>
                            <div className="item-remove is-size-7">
                                <span>remove</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="nav-cart-total">
                    <span>subtotals: </span>
                    <span>$50.00</span>
                </div>

                <hr />

                <div className="nav-cart-checkout has-text-centered">
                    {/* <Button1>checkout</Button1> */}
                    <Button3>checkout</Button3>
                </div>
            </div>
        </div>
    );
};

export default NavCart;
