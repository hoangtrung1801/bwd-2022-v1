import { Player } from "@lottiefiles/react-lottie-player";
import { doc } from "firebase/firestore";
import { motion } from "framer-motion";
import { screenLoadingImageVariants, screenLoadingVariants } from "../../utils/variants";
import "./screen-loading.css";

interface ScreenLoadingProps {
}

const ScreenLoading: React.FC<ScreenLoadingProps> = () => {
    return (
        <motion.div
            className="screen-loading is-flex is-justify-content-center is-align-items-center"
            key="screen-loading"
            variants={screenLoadingVariants}
            initial="initial"
            exit="exit"
            onAnimationComplete={() => {
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('height');
            }}
        >
            <motion.div
                variants={screenLoadingImageVariants}
                initial="initial"
                exit="exit"
            >
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_CIPL1V.json"
                    style={{ height: "500px", width: "500px" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default ScreenLoading;
