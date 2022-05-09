import { CaretRight } from "phosphor-react";

const NextArrowCarousel = ({ onClick }) => {
    return (
        <div className="carousel-next has-shadow" onClick={onClick}>
            <CaretRight />
        </div>
    );
};

export default NextArrowCarousel;