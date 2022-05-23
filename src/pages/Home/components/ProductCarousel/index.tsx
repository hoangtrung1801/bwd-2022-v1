// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrowCarousel from "../../../../components/NextArrowCarousel";
import PrevArrowCarousel from "../../../../components/PrevArrowCarousel";
import ProductCard from "../../../../components/ProductCard";
import TagNew from "../../../../components/Tag/TagNew";
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
                breakpoint: 1204,
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
        <div className="px-5 product-carousel-wrapper">
            <div className="has-text-centered" style={{letterSpacing: '1px'}}>
                {/* <h1 className="is-size-3 is-uppercase has-text-weight-bold"></h1>
                <p></p> */}
                <p className="is-size-4 has-text-weight-bold">
                    Sản phẩm mới
                </p>
                <p className="is-size-7">
                    Một dòng gì đó nên được ghi ở đây
                </p>
            </div>

            <div className="px-6 py-2 is-relative product-carousel">
                <Slider {...settings}>
                    {products.map((product, id) => (
                        <div className="px-1 py-4" key={id}>
                            <ProductCard product={product} tag={<TagNew />}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCarousel;
