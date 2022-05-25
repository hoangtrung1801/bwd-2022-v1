import { motion } from "framer-motion";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import { categories, currency } from "../../utils/constant";
import imageToUrl from "../../utils/functions/imageToUrl";
import numberWithCommas from "../../utils/functions/numberWithCommas";
import { Product } from "../../utils/types/Product";
import './product-card.css';

interface ProductCardProps {
    product: Product,
    tag?: React.ReactNode
}

const ProductCard: React.FC<ProductCardProps> = ({product, tag}) => {

    const [showAnoImg, setShowAnoImg] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        const fakeFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(addToCart(product));
                resolve(0);
            }, 800)
        })

        toast.promise(
            fakeFetch,
            {
                loading: <b>Loading...</b>,
                success: <b>Added to cart</b>,
                error: <b>Error</b>,
            }
        )
    }

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.images);
            setImages(result);
        }
        getImages();
    }, []);

    return (
        <motion.div
            className="product-card full-width full-height is-flex is-flex-direction-column is-clickable is-relative"
            // whileHover={{ y: "-10px" }}
            // onMouseOver={() => setShowAnoImg(true)}
            // onMouseLeave={() => setShowAnoImg(false)}
        >
            <div className="product-card-tag">
                {tag}
            </div>
            <Link to={ `/product/${product.id}` }>
                <motion.figure
                    className="image is-1by1 block has-cursor-pointer"
                    style={{ overflow: "hidden" }}
                >
                    <img src={images[0]} alt="" />
                    {/* <motion.img
                        src={images[1] || images[0]}
                        className={` ${
                            showAnoImg ? "image-show" : "image-hidden"
                        }`}
                    /> */}
                </motion.figure>
            </Link>
            <div className="mt-2 p-4 is-flex is-flex-direction-column is-justify-content-space-between is-flex-grow-1">
                <div className="has-text-centered">
                    <Link
                        to={ `/product/${product.id}` }
                        className="product-card-title is-size-5 has-text-weight-bold font-heading"
                    >
                        {product.name}
                    </Link>
                </div>
                <div>
                    <p
                        className="has-text-grey is-uppercase mt-1 has-text-centered"
                        style={{ fontSize: "0.8rem" }}
                    >
                        {categories.find(category => category.value == product.categories[0])?.label}
                    </p>

                    <div className="is-flex is-justify-content-space-between is-align-items-center mb-2 mt-3 px-1">
                        <div className="is-flex is-align-items-center">
                            <h6 className="is-size-5 has-text-weight-semibold ">
                                {numberWithCommas(product.price)} {currency.vn}
                            </h6>
                        </div>
                        <ShoppingCart
                            className="product-card-add is-size-4 is-clickable"
                            onClick={handleAdd}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProductCard;