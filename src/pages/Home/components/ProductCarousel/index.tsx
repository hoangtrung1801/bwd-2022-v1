// @ts-ignore
import Slider from "react-slick";
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
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />
    };

    return (
        <div className="px-5 py-4 product-carousel-wrapper has-text-centered">
            <div className="has-text-centered">
                <p className="is-size-3 has-text-weight-bold">New Arrivals</p>
                {/* <p className="">Treat yourself to smooth, hydrated, happy skin</p> */}
            </div>

            <div className="px-6 py-2 is-relative product-carousel">
                <Slider {...settings}>
                    {products.map((product, id) => (
                        <div className="px-2 py-6">
                            <ProductCard product={product} />
                        </div>
                    ))}
                    {/* {Array(5)
                        .fill(0)
                        .map((item, id) => (
                            <div className="item">
                                <div className="p-2 pb-4">
                                    <figure className="image is-1by1">
                                        <img
                                            src="https://media.istockphoto.com/photos/seamless-food-background-made-of-opened-canned-food-picture-id1348369752?b=1&k=20&m=1348369752&s=170667a&w=0&h=qO0uQSCqPhqOpXumVH-mfulVvITddkgY4AzsGEk5zlM="
                                            alt=""
                                            style={{ objectFit: "cover" }}
                                        />
                                    </figure>
                                    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-2">
                                        <div className="is-flex is-align-items-center">
                                            {
                                                Array(5).fill(0).map((item, id) => (
                                                    <Heart />
                                                ))
                                            }
                                        </div>
                                        <div className="full-width has-text-centered px-2 pb-2">
                                            <p className="has-text-weight-semibold">
                                                Skin-mergency Ampoules Kit
                                            </p>
                                            <p className="is-size-7">
                                                Instant Relief Treatment Set
                                            </p>
                                        </div>

                                        <button className="color-button">
                                            ADD TO BAG $22
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                </Slider>
            </div>
        </div>
    );
};

export default ProductCarousel;
