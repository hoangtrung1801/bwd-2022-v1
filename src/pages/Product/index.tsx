import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import getProduct from "../../utils/functions/getProduct";
import { useViewport } from "../../utils/hook/useViewport";
import { Product as ProductType } from "../../utils/types/Product";
import ProductReivews from "./components/ProductReview";
import ProductView from "./components/ProductView";

const Product = () => {

    const {isMobileTablet} = useViewport();

    const params = useParams();
    const [product, setProduct] = useState<ProductType>({} as ProductType);

    useEffect(() => {
        getProduct(params.id as string).then((product) => {
            setProduct(product);
        })
    }, [])

    return (
        <Layout>
            <div className={ `container is-max-widescreen px-4 py-6 ${isMobileTablet && 'px-6'}` }>
                <ProductView product={product}/>
                <ProductReivews />
            </div>
        </Layout>
    )
}

export default Product;