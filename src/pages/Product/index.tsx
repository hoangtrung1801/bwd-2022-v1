import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDoc } from "swr-firestore-v9";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import useProducts from "../../utils/hook/useProducts";
import useToken from "../../utils/hook/useToken";
import useUser from "../../utils/hook/useUser";
import { useViewport } from "../../utils/hook/useViewport";
import { Product as ProductType } from "../../utils/types/Product";
import ProductReivews from "./components/ProductReview";
import ProductView from "./components/ProductView";

const Product = () => {
    const { isMobileTablet } = useViewport();
    const { token } = useToken();
    const { user } = useUser(token);
    const params = useParams();

    // best
    // const { product, isLoading, error } = useProduct(params.id);

    // for optimze request
    const { products, isLoading, error } = useProducts();
    const [product, setProduct] = useState<ProductType>(null);
    const [comments, setComments] = useState([]);

    const onPostComment = (comment: string) => {
        updateDoc(`products/${params.id}`, {
            comments: [
                ...comments,
                {
                    username: user.username,
                    comment,
                    createAt: new Date().toISOString(),
                },
            ],
        });
    };

    useEffect(() => {
        if (isLoading) return;
        setProduct(products.find((product) => product.id === params.id));
        setComments(
            products.find((product) => product.id === params.id).comments || []
        );
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
                <ProductReivews
                    onPostComment={onPostComment}
                    comments={comments}
                />
            </div>
        </Layout>
    );
};

export default Product;
