import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart, removeFromCart, removeProductFromCart } from "../../app/slices/cartSlice";
import { currency } from "../../utils/constant";
import numberWithCommas from "../../utils/functions/numberWithCommas";
import Button1 from "../Button/Button1";
import Button3 from "../Button/Button3";

interface NavCartProps {
    isCartShow: boolean
}

const NavCart : React.FC<NavCartProps> = ({isCartShow}) => {
    const [hover, setHover] = useState(false);
    const products = useAppSelector(state => state.cart.items);
    const dispatch = useAppDispatch();

    return (
        <div className="nav-cart-wrapper">
            <div
                className={`nav-cart has-shadow px-5 py-4 ${
                    isCartShow || hover ? "nav-cart-show" : ""
                }`}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="nav-cart-header is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                    <h3>Giỏ hàng</h3>
                    <p>({products.length} sản phẩm)</p>
                </div>

                <hr />

                <div className="nav-cart-list">
                    {products.length === 0 ? (<p className="has-text-centered is-size-7 is-italic"> Không có gì ở đây</p>) :
                        products.map((product, id) => (
                        <div className="nav-cart-list-item" key={id}>
                            <div className="item-image-wrapper">
                                <div className="item-image">
                                    <img src="https://picsum.photos/200/300" />
                                </div>
                            </div>
                            <div className="item-content">
                                <h6 className="item-name">{product.product.name}</h6>
                                {/* <p className="item-description">ghikl</p> */}
                                <div className="item-option is-flex is-align-items-center">
                                    <div className="item-amount">
                                        <span onClick={() => dispatch(removeFromCart(product.product))}>-</span>
                                        <span>{product.amount}</span>
                                        <span onClick={() => dispatch(addToCart(product.product))}>+</span>
                                    </div>
                                    <div className="item-price is-size-7">
                                        <span>{numberWithCommas(product.product.price * product.amount)}{currency.vn}</span>
                                    </div>
                                </div>
                                <div className="item-remove is-size-7">
                                    <span className="is-clickable is-underlined" onClick={() => dispatch(removeProductFromCart(product.product))}>remove</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr />

                <div className="nav-cart-total">
                    <span>Tổng tiền hàng: </span>
                    <span>{numberWithCommas(products.reduce((prev, cur) => prev + cur.product.price * cur.amount, 0))}{currency.vn}</span>
                </div>

                <hr />

                <div className="nav-cart-checkout has-text-centered">
                    {/* <Button1>checkout</Button1> */}
                    <Link to='/checkout'>
                        <Button3>Thanh toán</Button3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavCart;
