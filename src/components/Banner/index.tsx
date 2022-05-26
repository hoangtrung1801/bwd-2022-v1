import { CaretLeft, CaretRight } from "phosphor-react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useViewport } from "../../utils/hook/useViewport";
import Button4 from "../Button/Button4";
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
        title?: string,
        body?: string,
        button?: string,
    }[]
}

const Banner: React.FC<BannerProps> = ({sections}) => {

    const {isMobile} = useViewport();

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: !isMobile && <NextArrowCarousel />,
        prevArrow: !isMobile && <PrevArrowCarousel />,
        // autoplay: true,
        autoplaySpeed: 5000,
    }
    return (
        <div className="banner-wrapper">
            <div className="is-relative banner">
                <Slider {...settings}>
                    {
                        sections
                        .map((item, id) => (
                            <div className={ `is-relative ${isMobile ? 'item-mobile' : 'item'}` } key={id}>
                                <div className="full-height">
                                    <img
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div className="banner-content">
                                    <div className="my-auto mx-auto" style={{width: '80%'}}>
                                        <h1 className={ `is-size-3 has-text-weight-bold ${isMobile ? 'is-size-3' : 'is-size-1'}` } style={{minHeight: '100px'}}>{item.title}</h1>
                                        <p className="mt-4" style={{minHeight: '100px'}}>{item.body}</p>
                                        { item.button && (
                                                <div className="mt-6">
                                                    <Button4>{item.button}</Button4>
                                                </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>

    )

}

export default Banner;