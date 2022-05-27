import { motion, useAnimation } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useViewport } from "../../utils/hook/useViewport";
import { carouselItemContentVariatns } from "../../utils/variants";
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

    const [idInView, setIdInView] = useState(0);
    const {isMobile} = useViewport();
    const animation = useAnimation();

    const settings = {
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: !isMobile && <NextArrowCarousel />,
        prevArrow: !isMobile && <PrevArrowCarousel />,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (id: number) => {
            setIdInView(( id+1 ) % sections.length);
        }
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
                                <CarouselItemContent item={item} inView={idInView === id ? true : false}/>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>

    )

}

interface CarouselItemContentProps {
    item: {
        image: string,
        title?: string,
        body?: string,
        button?: string,
    },
    inView: boolean
}

const CarouselItemContent: React.FC<CarouselItemContentProps> = ({item, inView}) => {
    const {isMobile} = useViewport();

    return (
        <motion.div
            className="banner-content"
            variants={carouselItemContentVariatns}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
        >
            <div className="my-auto mr-auto is-flex is-flex-direction-column">
                <h1
                    className={`has-text-weight-bold ${
                        isMobile ? "is-size-3" : "is-size-1"
                    }`}
                    style={{ minHeight: "6rem" }}
                >
                    {item.title}
                </h1>
                <p className="mt-4 banner-content-body" style={{fontSize: '1.1rem'}}>{item.body}</p>
                {item.button && (
                    <div className="mt-6">
                        <Button4>{item.button}</Button4>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Banner;