import "./product-footer.css";

const ProductFooter = () => {
    return (
        <div className="product-footer">
            <div className="product-footer-wrap">
                <div className="product-footer-list-item">
                    <h3 className="product-footer-title">Only on Lavie.com</h3>
                    <ul className="product-footer-wrap-item">
                        <li className="product-footer-item">
                            <div className="product-footer-item-img">
                                <img
                                    src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/truck73-37.gif"
                                    alt="FREE SHIPPING"
                                    className="gif-img"
                                />
                            </div>
                            <div className="product-footer-item-des">
                                <p>
                                    <strong>FREE SHIPPING</strong>
                                </p>
                                <p>
                                    ( on
                                    <span>orders over $40</span>)
                                </p>
                            </div>
                        </li>
                        <li className="product-footer-item">
                            <div className="product-footer-item-img">
                                <img
                                    src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/samples-gif-ani-73x37.gif"
                                    alt="FREE SAMPLES"
                                    className="gif-img"
                                />
                            </div>
                            <div className="product-footer-item-des">
                                <p>
                                    <strong>FREE SHIPPING</strong>
                                </p>
                                <p>FREE SAMPLES</p>
                            </div>
                        </li>
                        <li className="product-footer-item">
                            <div className="product-footer-item-img">
                                <img
                                    src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/gifts-gif-ani-73x37.gif"
                                    alt="SURPRISES"
                                    className="gif-img"
                                />
                            </div>
                            <div className="product-footer-item-des">
                                <p>
                                    <strong>SURPRISES</strong>
                                </p>
                                <p>(You will love. Trust.)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductFooter;
