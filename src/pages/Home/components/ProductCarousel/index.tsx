// @ts-ignore
import Slider from "react-slick";
import { motion, useAnimation, Variants } from "framer-motion";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrowCarousel from "../../../../components/NextArrowCarousel";
import PrevArrowCarousel from "../../../../components/PrevArrowCarousel";
import ProductCard from "../../../../components/ProductCard";
import TagNew from "../../../../components/Tag/TagNew";
import { Product } from "../../../../utils/types/Product";
import "./product-carousel.css";
import { inViewDropupShow } from "../../../../utils/variants";
import { useViewport } from "../../../../utils/hook/useViewport";

interface ProductCarouselProps {
    products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const {isMobile} = useViewport();

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 4,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <motion.div
            className="product-carousel-wrapper"
            style={{padding: isMobile ? '3rem 1rem' : '3rem'}}
        >
            <div className="has-text-centered block" style={{ letterSpacing: "1px" }}>
                <p className="is-size-4 has-text-weight-bold is-relative product-carousel-title is-uppercase">
                    Sản phẩm mới
                </p>
                <p className="is-size-7" style={{ maxHeight: "100px" }}>
                    {/* Một dòng gì đó nên được ghi ở đây */}
                    {/* Những sản phẩm ống hút vừa được ra mắt, với đa dạng ống hút làm từ các nguyên liệu thiên nhiên khác nhau, giúp giảm thải khí nhựa rất nhiều so với sản phẩm ống hút nhựa thông thường */}
                    Những sản phẩm mới sẽ luôn được cập nhật ở đây
                </p>
            </div>

            <motion.div className="py-2 is-relative product-carousel"
                style={{padding: isMobile ? '0.5rem 3rem' : '0.5rem 3rem'}}
                variants={inViewDropupShow}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <Slider {...settings}>
                    {products.map((product, id) => (
                        <div className="px-2 py-4" key={id}>
                            <ProductCard product={product} tag={<TagNew />} />
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </motion.div>
    );
};

export default ProductCarousel;
