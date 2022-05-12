// @ts-ignore
import Slider from "react-slick";
import { CaretLeft, CaretRight } from "phosphor-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './banner.css';

const NextArrowCarousel = ({onClick} : {onClick?: React.MouseEventHandler}) =>  (
    <div className="next ">
        <CaretRight onClick={onClick}/>
    </div>
)

const PrevArrowCarousel = ({onClick} : {onClick?: React.MouseEventHandler}) => (
    <div className="prev">
        <CaretLeft onClick={onClick}/>
    </div>
)

const Banner = () => {

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <div className="banner-wrapper">
            <div className="is-relative banner">
                <Slider {...settings}>
                    {Array(5)
                        .fill(0)
                        .map((item, id) => (
                            <div className="item">
                                <img
                                    src={ `https://picsum.photos/id/${Math.ceil(Math.random() * 100 + 10)}/1600/900` }
                                    alt=""
                                />
                            </div>
                        ))}
                </Slider>
            </div>
        </div>

    )

}

export default Banner;