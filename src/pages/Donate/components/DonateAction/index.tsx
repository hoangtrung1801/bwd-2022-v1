import { motion } from "framer-motion";
import { Handshake } from "phosphor-react";
import { donateActionSection, DONATENOW } from "../../../../utils/constant";
import { useViewport } from "../../../../utils/hook/useViewport";
import { categoryItemShow, inViewFromLeftShow, inViewFromRightShow } from "../../../../utils/variants";
import "./donate-action.css";

interface DonateActionProps {
    isLeft?: boolean;
}

const DonateAction: React.FC<DonateActionProps> = ({ isLeft = false }) => {

    const {isMobileTablet} = useViewport();

    return (
        <div className="donate-action-wrapper is-flex is-justify-content-center is-align-items-center">
            <motion.div className="donate-action is-relative">
                <motion.figure
                    className="image is-9by6"
                    style={{
                        width: "100%",
                        maxHeight: "500px",
                        overflow: "hidden",
                    }}
                            variants={inViewFromLeftShow}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true}}

                >
                    <img src={donateActionSection.image} alt="" />
                </motion.figure>
                <motion.div
                    className={`donate-action-content ${ isLeft && "donate-action-content-left"} ${isMobileTablet && 'donate-action-content-mobile'}`}
                    style={{padding: `${isMobileTablet ? '2rem' : '4rem 5rem'}`}}
                    variants={inViewFromRightShow}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}

                >
                    <div className="block">
                        <h2 className="is-size-2 has-text-weight-bold is-flex is-align-items-center">
                            {/* <Handshake size={64} weight='bold' className="mr-4"/> */}
                            {donateActionSection.title}
                        </h2>
                    </div>
                    <div className="block">
                        <p className="">{donateActionSection.content}</p>
                    </div>
                    <div className="block">
                        <a
                            href="#"
                            className="is-uppercase is-size-6 has-text-weight-semibold"
                        >
                            {DONATENOW}
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DonateAction;
