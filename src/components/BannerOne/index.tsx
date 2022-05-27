import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { inViewDropdownShow, inViewParentShow, inViewScaleChildShow, inViewScaleParentShow } from "../../utils/variants";
import Button4 from "../Button/Button4";
import "./banner-one.css";

const BannerOne = () => {
    const {inView, ref} = useInView({threshold: 0.5});

    return (
        <motion.div className="banner-one is-flex is-justify-content-center is-align-items-center is-relative"
            ref={ref}
            variants={inViewParentShow}
            initial='hidden'
            animate={inView && 'visible'}
        >
            <div className="has-text-centered">
                <div className="block">
                    <motion.h1 className="title is-1 has-text-white"
                        variants={inViewDropdownShow}
                    >
                        Cùng chung tay quyên góp bảo vệ môi trường
                    </motion.h1>
                    <motion.p className="has-text-white mx-auto" style={{width: '75%'}}
                        variants={inViewDropdownShow}
                        >
                        Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.
                    </motion.p>
                </div>
                <Link to="/donate">
                    <Button4>Quyên góp</Button4>
                </Link>
            </div>
        </motion.div>
    );
};

export default BannerOne;
