import { CaretLeft } from "phosphor-react";

const PrevArrowCarousel = ({onClick}) => {

    return (
        <div className="carousel-prev has-shadow" onClick={onClick}>
            <CaretLeft />
        </div>
    )
}

export default PrevArrowCarousel;
