import { motion } from "framer-motion";
import { CSSProperties } from "react";
import "./loading.css";

const Loading = () => {
    return (
        <motion.div
            className="loading"
            initial={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
        >
            <div className="loading-container">
                {/* <CircleLoader /> */}
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
            </div>
        </motion.div>
    );
};

const containerStyle: CSSProperties = {
    position: "relative",
    width: "3rem",
    height: "3rem",
    boxSizing: "border-box",
};

const circleStyle: CSSProperties = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #fff",
    borderTop: "0.5rem solid var(--color-1)",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
};

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
};

function CircleLoader() {
    return (
        <div style={containerStyle}>
            <motion.span
                style={circleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </div>
    );
}

export default Loading;
