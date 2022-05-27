import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Button1 from '../../../../components/Button/Button1';
import Button2 from '../../../../components/Button/Button2';
import Button3 from '../../../../components/Button/Button3';
import ProductCard from '../../../../components/ProductCard';
import imageToUrl from '../../../../utils/functions/imageToUrl';
import { Product } from '../../../../utils/types/Product';
import { inViewScaleChildShow, inViewScaleParentShow } from '../../../../utils/variants';
import './common-category.css';

interface CommonCategoryProps {
    products: Product[]
}

const CommonCategory: React.FC<CommonCategoryProps> = ({products}) => {

    const {inView, ref} = useInView({threshold: 0.2});

    return (
        <div className="common-category" ref={ref}>
            <div className="has-text-centered p-6">
                <div style={{letterSpacing: '1px'}}>
                    <p className="is-size-4 has-text-weight-bold is-relative common-category-title">
                        Sản phẩm phổ biến
                    </p>
                    <p className="is-size-7">
                        Những sản phẩm bán chạy trong năm nay
                    </p>
                </div>
                <motion.div className="columns is-flex-wrap-wrap is-justify-content-center my-4"
                    variants={inViewScaleParentShow}
                    initial='hidden'
                    animate={inView && 'visible'}
                >
                    {
                        products
                        .map((item, id) => {
                            return (
                                <motion.div className='column is-3-desktop is-6-tablet is-12-mobile' key={id}
                                    variants={inViewScaleChildShow}
                                >
                                    <ProductCard product={item} />
                                </motion.div>
                             );
                        })}
                </motion.div>
            </div>
        </div>
    );
}

const CommonCategoryItem = ({ product }: { product: Product }) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const getImages = async () => {
            const result = await imageToUrl(product.images);
            setImages(result);
        };
        getImages();
    }, []);
    return (
        <div className="common-category-item column is-3-desktop is-4-tablet is-12-mobile">
            <div>
                <figure className="image is-1by1">
                    {/* <img
                    src={ `https://picsum.photos/id/${Math.ceil( Math.random() * 100 + 10)}/1200` }
                    alt="" /> */}
                    <img src={images[0]} alt="" />
                </figure>
                <div className="has-text-centered my-4">
                    <p className="has-text-weight-bold mb-2">
                        Bright Idea Moisturizer
                    </p>
                    <p className="is-size-7">
                        Vitamin C + Tri-Peptide Collagen Protecting &
                        Brightening Moisturizer
                    </p>
                </div>
                <div>
                    <Button2>ADD TO BAG</Button2>
                </div>
            </div>
        </div>
    );
};

export default CommonCategory;