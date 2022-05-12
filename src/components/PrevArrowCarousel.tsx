import { CaretLeft } from "phosphor-react";

interface PrevArrowCarouselProps {
    onClick ?: React.MouseEventHandler,
}

const PrevArrowCarousel : React.FC<PrevArrowCarouselProps> = ({onClick}) => {

    return (
        <div className="carousel-prev has-shadow" onClick={onClick}>
            <CaretLeft />
        </div>
    )
}

export default PrevArrowCarousel;
