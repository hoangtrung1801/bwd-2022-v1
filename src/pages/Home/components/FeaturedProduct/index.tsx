import { useEffect, useState } from 'react';
import Button3 from '../../../../components/Button/Button3';
import imageToUrl from '../../../../utils/functions/imageToUrl';
import { Product } from '../../../../utils/types/Product';
import './featured-product.css';

interface FeaturedProductProps {
    products: Product[]
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({products}) => {

    return (
        <div className="featured-product">
            <div className="columns">
                {
                    products
                    .map((item, id) => (
                        <div className='column is-half px-2' key={id}>
                            <FeaturedProductItem product={item} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

const FeaturedProductItem = ({product} : {product: Product}) => {

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.images);
            setImages(result);
        };
        getImages();
    }, [])

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
}

export default FeaturedProduct;