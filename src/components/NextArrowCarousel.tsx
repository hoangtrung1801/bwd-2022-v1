import { CaretRight } from "phosphor-react";

interface NextArrowCarouselProps {
    onClick?: React.MouseEventHandler
}

const NextArrowCarousel : React.FC<NextArrowCarouselProps>  = ({ onClick }) => {
    return (
        <div className="carousel-next" onClick={onClick}>
            <CaretRight weight='bold' color='var(--green-6)'/>
        </div>
    );
};

export default NextArrowCarousel;