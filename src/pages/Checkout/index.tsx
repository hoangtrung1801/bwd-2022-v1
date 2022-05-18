import { useAppSelector } from "../../app/hooks";
import Button3 from "../../components/Button/Button3";
import Layout from "../../components/Layout";
import "./checkout.css";

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
    const products = useAppSelector(state => state.cart.items);

    return (
        <Layout>
            <div className="container py-6 checkout">
                <div className="columns ">
                    <div className="column is-8 ">
                        <div className="checkout-form px-6 py-5">
                            <div className="block">
                                <p className="is-size-3 has-text-weight-bold is-uppercase">
                                    Thanh toán
                                </p>
                            </div>
                            <div>
                                <form action="">
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label
                                                htmlFor=""
                                                className="label has-text-grey"
                                            >
                                                Họ và tên
                                            </label>
                                        </div>
                                        <div className="column is-9 columns pr-0">
                                            <div className="column is-half">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder="Tên"
                                                />
                                            </div>
                                            <div className="column is-half pr-0">
                                                <input
                                                    type="text"
                                                    className="input"
                                                    placeholder="Họ"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Email
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="nguyenvana@gmail.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Số nhà
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="123 Trần Cao Vân ..."
                                            />
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Thành phố
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Đà Nẵng"
                                            />
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Quốc gia
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Việt Nam"
                                            />
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Số điện thoại
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="0123456789"
                                            />
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className="column is-3 is-flex is-align-items-center">
                                            <label htmlFor="" className="label">
                                                Lời nhắn
                                            </label>
                                        </div>
                                        <div className="column is-9">
                                            <textarea
                                                className="textarea"
                                                rows={2}
                                                placeholder="e.g. Hello world"
                                            ></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="column is-4">
                        <div className="checkout-cart has-shadow px-4 py-5">
                            <div className="block">
                                <p className="is-size-5 has-text-weight-semibold is-uppercase">
                                    Sản phẩm
                                </p>
                                <p className="is-size-7 is-italic has-text-grey has-text-weight-light">
                                    ({products.length} items)
                                </p>
                            </div>
                            <div className="block">
                                {products.map(({product, amount}, id) => (
                                    <div
                                        className="columns is-variable is-1"
                                        key={id}
                                    >
                                        <div className="column is-3">
                                            <figure className="image">
                                                <img
                                                    src={product.images[0]}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="column is-6">
                                            <div>
                                                <p>{product.name}</p>
                                            </div>
                                        </div>
                                        <div className="column is-3">
                                            <div className="has-text-right">
                                                <p>${product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                                <p>Tổng tiền hàng</p>
                                <p>
                                    <span>₫</span>
                                    {
                                        products.reduce((prev, cur) => prev + cur.product.price * cur.amount, 0)
                                    }
                                </p>
                            </div>
                            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                                <p>Phí vận chuyển</p>
                                <p>-</p>
                            </div>
                            <div className="is-flex is-align-items-center is-justify-content-space-between has-text-grey">
                                <p>Tổng thanh toán</p>
                                <p
                                    className="is-size-4"
                                    style={{ color: "#E56138" }}
                                >
                                    <span>₫</span>
                                    {
                                        products.reduce((prev, cur) => prev + cur.product.price * cur.amount, 0)
                                    }
                                </p>
                            </div>
                            <hr />
                            <div className="is-flex is-justify-content-flex-end">
                                <Button3 className="checkout-button">
                                    Thanh toán
                                </Button3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
