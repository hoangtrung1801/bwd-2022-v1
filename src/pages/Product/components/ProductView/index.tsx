import { Star } from "phosphor-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../../app/hooks";
import { addToCart } from "../../../../app/slices/cartSlice";
import AmountContainer from "../../../../components/AmountContainer";
import Button2 from "../../../../components/Button/Button2";
import Button4 from "../../../../components/Button/Button4";
import Button5 from "../../../../components/Button/Button5";
import { currency } from "../../../../utils/constant";
import imageToUrl from "../../../../utils/functions/imageToUrl";
import numberWithCommas from "../../../../utils/functions/numberWithCommas";
import { Product as ProductType } from "../../../../utils/types/Product";
import './product-view.css';

const imgSrc = Array(4).fill(0).map((_, id) => `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1000`);

interface ProductViewProps {
    product: ProductType
}

const ProductView: React.FC<ProductViewProps> = ({product}) => {
    const [imgId, setImgId] = useState(0);
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
        const getImages = async() => {
            const result = await imageToUrl(product.images);
            setImages(result);
        }
        if(product.images) getImages();
    }, [product])

    return (
        <div className="product-view columns block mb-6">
            {/* <div className="column is-1 px-0">
                <div className="product-view-images">
                    {
                        images
                        .map((imageUrl, id) => (
                            <div className={ `mb-1 has-cursor-pointer ${id === imgId ? 'product-view-images-show' : ''}` } onMouseOver={() => setImgId(id)} key={id}>
                                <figure className="image is-1by1">
                                    <img
                                        src={imageUrl}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        ))}
                </div>
            </div>
            <div className="column is-5">
                <figure className="image is-1by1">
                    <img
                        src={images[imgId]}
                        alt=""
                    />
                </figure>
            </div> */}
            <div className="column is-5">
                <div>
                    <div className="product-view-image-main">
                        <figure className="image is-1by1">
                            <img src={images[imgId]} alt="" />
                        </figure>
                    </div>
                    <div className="is-flex product-view-images mt-4">
                        {images.map((imageUrl, id) => (
                            <div
                                className={`${id == imgId && 'image-show'} is-clickable`}
                                onMouseOver={() => setImgId(id)}
                                key={id}
                            >
                                <div className="full-width full-height">
                                    <figure className="image is-1by1">
                                        <img src={imageUrl} alt="" />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" column is-7">
                <div className="product-view-content">
                    <h3 className="is-size-3 has-text-weight-bold">
                        {product.name}
                    </h3>
                    <div>
                        <div>
                            {Array(5)
                                .fill(0)
                                .map((_, id) => (
                                    <Star
                                        className="mr-1"
                                        weight="fill"
                                        color="#ffd700"
                                        key={id}
                                    />
                                ))}
                        </div>
                    </div>
                    <h1 className="is-size-4 has-text-weight-bold">
                        {numberWithCommas(product.price)} {currency.vn}
                    </h1>
                    <p
                        className="product-view-content-description "
                        style={{ fontSize: "0.9rem" }}
                    >
                        {product.description}
                    </p>
                    <div className="product-view-variants block">
                        {/* Size */}
                        {/* <div className="product-view-variants-item is-flex is-align-items-center block">
                            <p className="is-size-7 is-uppercase has-text-weight-bold">Size : </p>
                            <OptionContainer options={['S', 'M', 'L']}/>
                        </div> */}
                        <div className="product-view-variants-item is-flex is-align-items-center block">
                            <p className="is-size-7 is-uppercase has-text-weight-bold mr-4">
                                Số lượng :{" "}
                            </p>
                            <AmountContainer />
                        </div>
                    </div>
                    <div>
                        {/* <Button4 onClick={handleAdd}>Thêm vào giỏ</Button4> */}
                        <Button5 onClick={handleAdd}>Thêm vào giỏ</Button5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
