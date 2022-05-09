import './featured-product.css';

const FeaturedProduct = () => {
    return (
        <div className="featured-product">
            <div className="columns">
                {Array(2)
                    .fill(0)
                    .map((item, id) => (
                        <div className="column is-half px-2" key={id}>
                            <div className="is-flex is-flex-direction-column is-align-items-center">
                                <figure className="image is-1by1 full-width">
                                    <img
                                        src="https://via.placeholder.com/300.png"
                                        alt=""
                                    />
                                </figure>
                                <div className="has-background-white has-text-centered is-relative pt-4 featured-product-content">
                                    <p className="has-text-weight-bold">
                                        NEW! Fabulips™
                                    </p>
                                    <p className="is-size-7">
                                        Three new ways to pamper & nourish your
                                        pout.
                                    </p>
                                    <button className="color-button featured-product-button">
                                        shop
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default FeaturedProduct;