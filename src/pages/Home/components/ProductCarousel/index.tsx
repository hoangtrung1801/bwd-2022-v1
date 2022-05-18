// @ts-ignore
import Slider from "react-slick";
import { CaretRight } from "phosphor-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrowCarousel from "../../../../components/NextArrowCarousel";
import PrevArrowCarousel from "../../../../components/PrevArrowCarousel";
import ProductCard from "../../../../components/ProductCard";
import { Product } from "../../../../utils/types/Product";
import './product-carousel.css';

interface ProductCarouselProps {
    products: Product[]
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="px-5 py-4 product-carousel-wrapper has-text-centered">
            <div className="has-text-centered">
                <p className="is-size-3 has-text-weight-bold">Sản phẩm mới</p>
                {/* <p className="">Treat yourself to smooth, hydrated, happy skin</p> */}
            </div>

            <div className="px-6 py-2 is-relative product-carousel">
                <Slider {...settings}>
                    {products.map((product, id) => (
                        <div className="px-2 py-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCarousel;
