import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../../../../components/ProductCard';
import { Product } from '../../../../utils/types/Product';
import { inViewScaleChildShow, inViewScaleParentShow } from '../../../../utils/variants';
import './common-category.css';

interface CommonCategoryProps {
    products: Product[]
}

const CommonCategory: React.FC<CommonCategoryProps> = ({products}) => {

    const {inView, ref} = useInView({threshold: 0.2});

    return (
        <div className="common-category py-4" ref={ref}>
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

export default CommonCategory;