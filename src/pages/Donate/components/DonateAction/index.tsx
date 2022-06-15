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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={donateActionSection.image} alt="" />
                </motion.figure>
                <motion.div
                    className={`donate-action-content ${
                        isLeft && "donate-action-content-left"
                    } ${isMobileTablet && "donate-action-content-mobile"}`}
                    style={{
                        padding: `${isMobileTablet ? "2rem" : "4rem 5rem"}`,
                    }}
                    variants={inViewFromRightShow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                            className="is-uppercase is-size-6 has-text-weight-semibold donate-action-link"
                            style={{color: 'white'}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                style={{width: '2rem' , height: '2rem'}}
                                fill='white'
                            >
                                <path d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99c0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62c3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74L15.1 383.1C7.251 383.1 0 391.3 0 400v95.98C0 504.8 7.251 512 15.1 512h346.1c22.03 0 43.92-7.188 61.7-20.27l135.1-99.52C577.5 379.1 581.3 354.1 568.2 336.3zM279.3 175C271.7 173.9 261.7 170.3 252.9 167.1L248 165.4C235.5 160.1 221.8 167.5 217.4 179.1s2.121 26.2 14.59 30.64l4.655 1.656c8.486 3.061 17.88 6.095 27.39 8.312V232c0 13.25 10.73 24 23.98 24s24-10.75 24-24V221.6c25.27-5.723 42.88-21.85 46.1-45.72c8.688-50.05-38.89-63.66-64.42-70.95L288.4 103.1C262.1 95.64 263.6 92.42 264.3 88.31c1.156-6.766 15.3-10.06 32.21-7.391c4.938 .7813 11.37 2.547 19.65 5.422c12.53 4.281 26.21-2.312 30.52-14.84s-2.309-26.19-14.84-30.53c-7.602-2.627-13.92-4.358-19.82-5.721V24c0-13.25-10.75-24-24-24s-23.98 10.75-23.98 24v10.52C238.8 40.23 221.1 56.25 216.1 80.13C208.4 129.6 256.7 143.8 274.9 149.2l6.498 1.875c31.66 9.062 31.15 11.89 30.34 16.64C310.6 174.5 296.5 177.8 279.3 175z" />
                            </svg>
                            <span className="ml-2" style={{lineHeight: '2rem'}}>
                                {DONATENOW}
                            </span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DonateAction;
