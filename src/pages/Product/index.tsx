import { Star } from "phosphor-react";
import Button3 from "../../components/Button/Button3";
import Layout from "../../components/Layout";
import ProductReivews from "./components/ProductReview";
import ProductView from "./components/ProductView";

const Product = () => {

    return (
        <Layout>
            <div className="container is-max-widescreen py-6">
                <ProductView />
                <ProductReivews />
            </div>
        </Layout>
    )
}

export default Product;