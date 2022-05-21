import { Player } from "@lottiefiles/react-lottie-player";
import { doc } from "firebase/firestore";
import { motion } from "framer-motion";
import { screenLoadingVariants } from "../../utils/variants";
import "./screen-loading.css";

interface ScreenLoadingProps {
    loading?: boolean;
}

const ScreenLoading: React.FC<ScreenLoadingProps> = ({ loading }) => {
    return (
        <motion.div
            className="screen-loading is-flex is-justify-content-center is-align-items-center"
            key="screen-loading"
            variants={screenLoadingVariants}
            initial="initial"
            exit="exit"
            // onAnimationStart={() => {
            //     document.body.style.height = '100vh';
            //     document.body.style.overflow = 'hidden';
            // }}
            onAnimationComplete={() => {
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('height');
            }}
        >
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_CIPL1V.json"
                style={{ height: "500px", width: "500px" }}
            />
        </motion.div>
    );
};

export default ScreenLoading;
