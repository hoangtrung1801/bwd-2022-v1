import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import BannerOne from "../../components/BannerOne";
import Layout from "../../components/Layout";
import { bannerSection } from "../../utils/constant";
import useProducts from "../../utils/hook/useProducts";
import { Product } from "../../utils/types/Product";
import CommonCategory from "./components/CommonCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductCarousel from "./components/ProductCarousel";

const Home = () => {
    const { products, error, isLoading } = useProducts();
    const [newArrivals, setNewArrivals] = useState<Product[]>([]);
    const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);
    const [commonCategory, setCommonCategory] = useState<Product[]>([]);

    useEffect(() => {
        if (isLoading || error) return;
        setNewArrivals(
            products.filter((product) => product.categories.includes("straw"))
        );
        setFeaturedProduct(
            products.filter((product) => product.categories.includes("hot"))
        );
        setCommonCategory(
            products.filter((product) => product.categories.includes("common"))
        );
    }, [products]);

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
