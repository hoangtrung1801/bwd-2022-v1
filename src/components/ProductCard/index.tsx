import { Eye } from "phosphor-react";
import { useState } from "react";
import Button2 from "../Button/Button2";
import './product-card.css';

const ProductCard = () => {

    const [showAnoImg, setShowAnoImg] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div className="product-card full-width has-cursor-pointer">
            <figure className="image is-1by1 block has-cursor-pointer" onMouseOver={() => setShowAnoImg(true)} onMouseLeave={() => setShowAnoImg(false)}>
                <img src={ `https://picsum.photos/id/190/600` } alt="" />
                <img src={ `https://picsum.photos/id/170/600` } className={` ${showAnoImg ? 'image-show' : 'image-hidden'}`} alt="" />
                <div className={ `product-card-view py-2 is-flex is-align-items-center is-justify-content-center is-uppercase is-size-7 ${showAnoImg  ? '' : 'is-hidden'}`}> <Eye /><p className="ml-1"> View</p></div>
            </figure>
            <div className="has-text-centered">
                <a href="#" className="product-card-title has-text-weight-semibold">Product Name</a>
                <h6 className="my-3">$999.99</h6>
                <Button2>ADD TO CART</Button2>
            </div>
        </div>
    )
}

export default ProductCard;