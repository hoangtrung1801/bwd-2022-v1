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

interface BannerProps {
    // images: string[]
    sections: {
        image: string,
        title: string,
        body: string,
    }[]
}

const Banner: React.FC<BannerProps> = ({sections}) => {

    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowCarousel />,
        prevArrow: <PrevArrowCarousel />,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    return (
        <div className="banner-wrapper">
            <div className="is-relative banner">
                <Slider {...settings}>
                    {
                        sections
                        .map((item, id) => (
                            <div className="item" key={id}>
                                <div>
                                    <img
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>

    )

}

export default Banner;