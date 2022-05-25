import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import getProduct from "../../utils/functions/getProduct";
import { Product as ProductType } from "../../utils/types/Product";
import ProductReivews from "./components/ProductReview";
import ProductView from "./components/ProductView";

const Product = () => {

    const params = useParams();
    const [product, setProduct] = useState<ProductType>({} as ProductType);

    useEffect(() => {
        getProduct(params.id as string).then((product) => {
            setProduct(product);
        })
    }, [])

    return (
        <Layout>
            <div className="container is-max-widescreen py-6">
                <ProductView product={product}/>
                <ProductReivews />
            </div>
        </Layout>
    )
}

export default Product;