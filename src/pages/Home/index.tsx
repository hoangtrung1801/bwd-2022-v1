import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { bannerSection } from "../../utils/constant";
import getAllProducts from "../../utils/functions/getAllProducts";
import { Product } from "../../utils/types/Product";
import CommonCategory from "./components/CommonCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductCarousel from "./components/ProductCarousel";

const Home = () => {
    const [newArrivals, setNewArrivals] = useState<Product[]>([]);
    const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);
    const [commonCategory, setCommonCategory] = useState<Product[]>([]);

    useEffect(() => {
        const getNewArrivals = (products: Product[]) => {
            return products.filter((product) => {
                return product.categories.indexOf("straw") >= 0;
            });
        };

        const getFeaturedProduct = (products: Product[]) => {
            return products.slice(0, 2);
        };

        const getCommonCategory = (products: Product[]) => {
            return products.slice(0, 6);
        };

        getAllProducts().then((data) => {
            const products: Product[] = data;
            setNewArrivals(getNewArrivals(products));
            setFeaturedProduct(getFeaturedProduct(products));
            setCommonCategory(getCommonCategory(products));
        });
    }, []);

    return (
        <Layout>
            <Banner sections={bannerSection} showContent={false} />
            <ProductCarousel products={newArrivals} />
            <FeaturedProduct products={featuredProduct} />
            <CommonCategory products={commonCategory} />
        </Layout>
    );
};

export default Home;
