import { useEffect, useState } from "react";
import Button3 from "../../../components/Button/Button3";
import imageToUrl from "../../../utils/functions/imageToUrl";
import { ItemCart } from "../../../utils/types/ItemCart";

interface CheckoutCartProps {
    products: ItemCart[],
}

const CheckoutCart: React.FC<CheckoutCartProps> = ({products}) => {

    return (
        <div className="checkout-cart has-shadow px-4 py-5">
            <div className="block">
                <h2 className="is-size-5 has-text-weight-bold is-uppercase">
                    Sản phẩm
                </h2>
                <p className="is-size-7 is-italic has-text-grey has-text-weight-light">
                    ({products.length} items)
                </p>
            </div>
            <div className="block">
                {products.map((item, id) => (
                    <CheckoutCartItem item={item} key={id} />
                ))}
            </div>
            <hr />
            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                <p>Tổng tiền hàng</p>
                <p>
                    <span>₫</span>
                    {products.reduce(
                        (prev, cur) => prev + cur.product.price * cur.amount,
                        0
                    )}
                </p>
            </div>
            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                <p>Phí vận chuyển</p>
                <p>-</p>
            </div>
            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                <p>Tổng thanh toán</p>
                <p className="is-size-4" style={{ color: "#E56138" }}>
                    <span>₫</span>
                    {products.reduce(
                        (prev, cur) => prev + cur.product.price * cur.amount,
                        0
                    )}
                </p>
            </div>
            <hr />
            <div className="is-flex is-justify-content-flex-end">
                <Button3 className="checkout-button">Thanh toán</Button3>
            </div>
        </div>
    );
};

interface CheckoutCartItemProps{
    item: ItemCart,
}

const CheckoutCartItem: React.FC<CheckoutCartItemProps> = ({item}) => {

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(item.product.images);
            setImages(result);
        };
        getImages();
    }, [])

    return (
        <div className="columns is-variable is-1">
            <div className="column is-3">
                <figure className="image">
                    <img src={images[0]} alt="" />
                </figure>
            </div>
            <div className="column is-6">
                <div>
                    <p>{item.product.name}</p>
                </div>
            </div>
            <div className="column is-3">
                <div className="has-text-right">
                    <p>${item.product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart;
