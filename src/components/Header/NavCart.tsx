const NavCart = ({isCartShow}) => {
    return (
        <div className="nav-cart-wrapper is-relative">
            <div className={`nav-cart mt-3 ${isCartShow ? "" : "is-hidden"}`}>
                <div className="nav-cart-toplink">
                    <p>{"<"} keep shopping</p>
                    <p>view full shopping bag {">"}</p>
                </div>

                <div className="color-divide"></div>

                <div className="nav-cart-header">
                    <h3>shopping bag</h3>
                    <p>(3 items)</p>
                </div>

                <div className="color-divide"></div>

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
                                <div className="item-remove is-size-7">
                                    <span>remove</span>
                                </div>
                                <div className="item-price is-size-7">
                                    <span>$100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="color-divide"></div>

                <div className="nav-cart-total">
                    <span>subtotals: </span>
                    <span>$50.00</span>
                </div>

                <div className="color-divide"></div>

                <div className="nav-cart-checkout">
                    <button className="color-button">checkout</button>
                </div>
            </div>
        </div>
    );
};

export default NavCart;
