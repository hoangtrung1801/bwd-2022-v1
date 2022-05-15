import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { fetchData } from "../../utils/functions/fetchData";
import { Product } from "../../utils/types/Product";
import Banner from "./components/Banner";
import CommonCategory from "./components/CommonCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductCarousel from "./components/ProductCarousel";
import ProductFooter from "./components/ProductFooter";

const Home = () => {

    const [newArrivals, setNewArrivals] = useState<Product[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const newArrivals = (await fetchData('/api/products')).products;
            setNewArrivals(newArrivals);
        }

        fetch().catch(e => console.log(e));
    }, []);

    return (
        <Layout>
            <Banner />
            <ProductCarousel products={newArrivals}/>
            <FeaturedProduct />
            <CommonCategory />
        </Layout>
    );
};

export default Home;
