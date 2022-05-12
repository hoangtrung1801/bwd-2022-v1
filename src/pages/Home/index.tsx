import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import Layout from "../../components/Layout";
import Banner from "./components/Banner";
import CommonCategory from "./components/CommonCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import ProductFooter from "./components/ProductFooter";

const Home = () => {

    return (
        <Layout>
            <Banner />
            <ProductCarousel />
            <ProductFooter />
            <FeaturedProduct />
            <CommonCategory />
        </Layout>
    );
};

export default Home;
