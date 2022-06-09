import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Button3 from "../../../../components/Button/Button3";
import ProductCard from "../../../../components/ProductCard";
import TagHot from "../../../../components/Tag/TagHot";
import imageToUrl from "../../../../utils/functions/imageToUrl";
import { Product } from "../../../../utils/types/Product";
import {
    inViewScaleChildShow,
    inViewScaleParentShow
} from "../../../../utils/variants";
import "./featured-product.css";

interface FeaturedProductProps {
    products: Product[];
}

const parentVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delay: 0.3,
        },
    },
};

const childVariants: Variants = {
    hidden: {
        scale: 0.9,
    },
    visible: {
        scale: 1,
    },
};

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ products }) => {
    const { inView, ref } = useInView({
        threshold: 0.2,
    });

    return (
        <div className="featured-product py-6">
            <div
                className="has-text-centered has-text-white mb-4"
                style={{ letterSpacing: "1px" }}
            >
                <p className="is-size-4 has-text-weight-bold is-relative featured-product-title is-uppercase">
                    Sản phẩm nổi bật
                </p>
                <p className="is-size-7">
                    Hãy thử và trải nghiệm sản phẩm nổi bật của chúng tôi
                </p>
            </div>
            <motion.div
                ref={ref}
                className="columns is-justify-content-center is-align-items-center"
                variants={inViewScaleParentShow}
                initial="hidden"
                animate={inView && "visible"}
            >
                {products.map((item, id) => (
                    <motion.div
                        className="column is-half-desktop px-2"
                        style={{ maxWidth: "380px" }}
                        key={id}
                        variants={inViewScaleChildShow}
                    >
                        {/* <FeaturedProductItem product={item} /> */}
                        <ProductCard product={item} tag={<TagHot />} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

const FeaturedProductItem = ({ product }: { product: Product }) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.images);
            setImages(result);
        };
        getImages();
    }, []);

    return (
        <div className="is-flex is-flex-direction-column is-align-items-center">
            <figure className="image is-1by1 full-width">
                {/* <img
                src={ `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1200`}
                alt=""
            /> */}
                <img src={images[0]} alt="" />
            </figure>
            <div className="has-background-white has-text-centered is-relative pt-4 featured-product-content">
                <p className="has-text-weight-bold">NEW! Fabulips™</p>
                <p className="is-size-7">
                    Three new ways to pamper & nourish your pout.
                </p>
                <div className="mt-4">
                    <Button3>SHOP</Button3>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
