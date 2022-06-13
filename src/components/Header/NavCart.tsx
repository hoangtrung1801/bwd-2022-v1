import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    addToCart,
    removeFromCart,
    removeProductFromCart
} from "../../app/slices/cartSlice";
import { currency } from "../../utils/constant";
import imageToUrl from "../../utils/functions/imageToUrl";
import numberWithCommas from "../../utils/functions/numberWithCommas";
import { ItemCart } from "../../utils/types/ItemCart";
import Button3 from "../Button/Button3";

interface NavCartProps {
    isCartShow: boolean;
    closeNavCart: () => void;
}

const navCartVariants: Variants = {
    open: {
        opacity: 1,
        width: "600px",
    },
    close: {
        opacity: 0,
        width: 0,
    },
};

const NavCart: React.FC<NavCartProps> = ({ isCartShow, closeNavCart }) => {
    const [open, setOpen] = useState(false);
    const products = useAppSelector((state) => state.cart.items);

    return (
        <div className="nav-cart-wrapper" >
            {(isCartShow || open) && (
                <div
                    className="nav-cart-background"
                    onClick={() => closeNavCart()}
                ></div>
            )}
            <motion.div
                className={`nav-cart has-shadow`}
                variants={navCartVariants}
                initial={false}
                animate={isCartShow ? "open" : "close"}
            >
                <div className="px-5 py-6 is-flex is-flex-direction-column" style={{minHeight: '100%'}}>
                    <div className="nav-cart-header is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                        <h3 className="is-size-4 mb-2" style={{letterSpacing: '0.5px'}}>Giỏ hàng</h3>
                        <p className="is-italic is-size-7 has-text-grey">(  {products.length} sản phẩm  )</p>
                    </div>
                    <hr />
                    <CartItemList products={products} />
                    <hr />
                    <div className="nav-cart-total">
                        <span>Tổng tiền hàng: </span>
                        <span>
                            {numberWithCommas(
                                products.reduce(
                                    (prev, cur) =>
                                        prev + cur.product.price * cur.amount,
                                    0
                                )
                            )}
                            {currency.vn}
                        </span>
                    </div>

                    <hr />

                    <div className="nav-cart-checkout has-text-centered">
                        <Link to="/checkout">
                            <Button3 className="is-uppercase has-text-weight-semibold">Thanh toán</Button3>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

interface CartItemListProps {
    products: ItemCart[];
}

const CartItemList: React.FC<CartItemListProps> = ({ products }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="nav-cart-list is-flex-grow-1">
            {products.length === 0 ? (
                <p className="has-text-centered is-size-7 is-italic">
                    {" "}
                    Không có gì ở đây
                </p>
            ) : (
                products.map((product, id) => (
                    <CartItem product={product} key={id} />
                ))
            )}
        </div>
    );
};

interface CartItemProps {
    product: ItemCart;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.product.images);
            setImages(result);
        };
        getImages().catch((e) => console.log(e));
    }, []);

    return (
        <div className="nav-cart-list-item">
            <div className="item-image-wrapper">
                <div className="item-image">
                    <img src={images[0]} />
                </div>
            </div>
            <div className="item-content">
                <h6 className="item-name">{product.product.name}</h6>
                {/* <p className="item-description">ghikl</p> */}
                <div className="item-option is-flex is-align-items-center">
                    <div className="item-amount">
                        <span
                            onClick={() =>
                                dispatch(removeFromCart(product.product))
                            }
                        >
                            -
                        </span>
                        <span>{product.amount}</span>
                        <span
                            onClick={() => dispatch(addToCart(product.product))}
                        >
                            +
                        </span>
                    </div>
                    <div className="item-price is-size-7">
                        <span>
                            {numberWithCommas(
                                product.product.price * product.amount
                            )}
                            {currency.vn}
                        </span>
                    </div>
                </div>
                <div className="item-remove is-size-7">
                    <span
                        className="is-clickable is-underlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.product))
                        }
                    >
                        Xóa
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavCart;
