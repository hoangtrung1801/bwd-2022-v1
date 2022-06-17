import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import BannerOne from "../../components/BannerOne";
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
            return products.filter(product => product.categories.includes('straw'));
        };

        const getFeaturedProduct = (products: Product[]) => {
            return products.filter(product => product.categories.includes("hot")).slice(0, 4);
        };

        const getCommonCategory = (products: Product[]) => {
            return products.filter(product => product.categories.includes("common")).slice(0,4);
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
            <Banner sections={bannerSection} />
            <ProductCarousel products={newArrivals} />
            <FeaturedProduct products={featuredProduct} />
            <CommonCategory products={commonCategory} />
            <BannerOne />
        </Layout>
    );
};

export default Home;
