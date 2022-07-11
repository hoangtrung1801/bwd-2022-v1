import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import useProducts from "../../utils/hook/useProducts";
import { useViewport } from "../../utils/hook/useViewport";
import { Product as ProductType } from "../../utils/types/Product";
import ProductReivews from "./components/ProductReview";
import ProductView from "./components/ProductView";

const Product = () => {
    const { isMobileTablet } = useViewport();
    const params = useParams();
    // const { product, isLoading, error } = useProduct(params.id);
    // for optimze request
    const { products, isLoading, error } = useProducts();
    const [product, setProduct] = useState<ProductType>(null);

    useEffect(() => {
        if (isLoading) return;
        setProduct(products.find((product) => product.id === params.id));
    }, [products]);

    if (error) return <div>error</div>;

    return (
        <Layout>
            <div
                className={`container is-max-widescreen px-4 py-6 ${
                    isMobileTablet && "px-4"
                }`}
            >
                {product && <ProductView product={product} />}
                <ProductReivews />
            </div>
        </Layout>
    );
};

export default Product;
