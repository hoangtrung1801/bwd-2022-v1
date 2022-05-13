import { FullMetadata, uploadBytes, UploadMetadata } from "firebase/storage";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import Layout from "../../components/Layout";
import storage, { imagesRef } from "../../firebase";
import Banner from "./components/Banner";
import CommonCategory from "./components/CommonCategory";
import FeaturedProduct from "./components/FeaturedProduct";
import Hero from "./components/Hero";
import ProductCarousel from "./components/ProductCarousel";
import ProductFooter from "./components/ProductFooter";

const Home = () => {

    const handleUpload = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        const uploadTask = uploadBytes(imagesRef, file).then(snapshot => {
            console.log('uploaded a file');
        })
    }

    return (
        <Layout>
            {/* <div>
                <input type="file" className="input" onChange={(e) => handleUpload(e)}/>
            </div> */}
            <Banner />
            <ProductCarousel />
            <ProductFooter />
            <FeaturedProduct />
            <CommonCategory />
        </Layout>
    );
};

export default Home;
