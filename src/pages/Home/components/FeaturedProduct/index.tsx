import { useEffect, useState } from 'react';
import Button3 from '../../../../components/Button/Button3';
import ProductCard from '../../../../components/ProductCard';
import TagHot from '../../../../components/Tag/TagHot';
import imageToUrl from '../../../../utils/functions/imageToUrl';
import { Product } from '../../../../utils/types/Product';
import './featured-product.css';

interface FeaturedProductProps {
    products: Product[]
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({products}) => {

    return (
        <div className="featured-product">
            <div className='has-text-centered has-text-white mb-4' style={{letterSpacing: '1px'}}>
                <p className="is-size-4 has-text-weight-bold">
                    Sản phẩm nổi bật
                </p>
                <p className="is-size-7">
                    Một dòng gì đó nên được ghi ở đây
                </p>
            </div>
            <div className="columns is-justify-content-center is-align-items-center">
                {
                    products
                    .map((item, id) => (
                        <div className='column is-half-desktop px-2' style={{maxWidth: '380px'}} key={id}>
                            {/* <FeaturedProductItem product={item} /> */}
                            <ProductCard product={item} tag={<TagHot />}/>
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