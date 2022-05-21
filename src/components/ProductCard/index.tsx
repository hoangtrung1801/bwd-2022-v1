import { motion } from "framer-motion";
import { Eye, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/slices/cartSlice";
import { currency } from "../../utils/constant";
import imageToUrl from "../../utils/functions/imageToUrl";
import { Product } from "../../utils/types/Product";
import Button1 from "../Button/Button1";
import Button2 from "../Button/Button2";
import Button3 from "../Button/Button3";
import './product-card.css';

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {

    const [showAnoImg, setShowAnoImg] = useState(false);
    const [images, setImages] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.images);
            setImages(result);
        }
        getImages();
    }, []);

    return (
        <motion.div
            className="product-card full-width"
            whileHover={{ y: "-10px" }}
        >
            <Link to="/product">
                <motion.figure
                    className="image is-1by1 block has-cursor-pointer"
                    style={{ overflow: "hidden" }}
                    onMouseOver={() => setShowAnoImg(true)}
                    onMouseLeave={() => setShowAnoImg(false)}
                >
                    <img src={images[0]} alt="" />
                    <motion.img
                        src={images[1] || images[0]}
                        className={` ${
                            showAnoImg ? "image-show" : "image-hidden"
                        }`}
                    />
                </motion.figure>
            </Link>
            <div className="mt-2 p-4">
                {/* <div>
                    <Link to="#" className="product-card-title is-uppercase has-text-weight-semibold">{product.name}</Link>
                    <p className="has-text-grey is-capitalized my-2" style={{fontSize: '0.8rem'}}>{product.categories[0]}</p>
                    <p className="mb-2 has-text-weight-semibold">{product.price} {currency.vn}</p>
                </div>
                <div className="mt-2">
                    <Button3 >THÊM VÀO GIỎ</Button3>
                </div> */}
                <div className="has-text-centered">
                    <Link
                        to="/product"
                        className="product-card-title is-uppercase has-text-weight-semibold"
                    >
                        {product.name}
                    </Link>
                    <p
                        className="has-text-grey is-capitalized mt-1"
                        style={{ fontSize: "0.8rem" }}
                    >
                        {product.categories[0]}
                    </p>
                </div>
                <div className="is-flex is-justify-content-space-between is-align-items-center mb-2 mt-3">
                    <div className="is-flex is-align-items-center">
                        <p className="is-size-5 has-text-weight-semibold">
                            {product.price} {currency.vn}
                        </p>
                    </div>
                    <ShoppingCart
                        className="product-card-add is-size-4 is-clickable"
                        onClick={() => dispatch(addToCart(product))}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default ProductCard;