import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Button3 from "../../../../components/Button/Button3";
import { DONATENOW } from "../../../../utils/constant";
import { inViewDropupShow, inViewParentShow } from "../../../../utils/variants";
import "./donate-box.css";

interface DonateBoxProps {
    showDonateForm: () => void;
}

const amountDonate = [50, 100, 200, 500, 1000];

const DonateBox: React.FC<DonateBoxProps> = ({ showDonateForm }) => {
    const [amountId, setAmountId] = useState(0);

    const {inView, ref} = useInView({threshold: 0.5});

    return (
        <div className="donate-box-wrapper is-relative">
            <div className="full-width full-height" style={{zIndex: 1}}>
                <motion.div className="donate-box full-height is-flex is-flex-direction-column is-align-items-center is-justify-content-center mx-auto"
                    ref={ref}
                    variants={inViewParentShow}
                    initial='hidden'
                    animate={inView && 'visible'}
                >
                    <motion.div className="donate-box-title block has-text-centered mb-6"
                        variants={inViewDropupShow}
                    >
                        <p className="is-size-5 is-uppercase has-text-weight-bold font-heading">
                            Quyên góp
                        </p>
                        <p className="is-size-2 is-uppercase has-text-weight-bold font-heading has-text-white">
                            Vì một môi trường xanh sạch đẹp
                        </p>
                        <p className="has-text-white">
                            Cùng nhau hành động ngay bây giờ, mọi đóng góp của
                            bạn đều mang lại sự thay đổi tích cực cho môi
                            trường.
                        </p>
                    </motion.div>
                    <motion.div className="block donate-box-amount mb-6 is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center"
                        variants={inViewDropupShow}
                    >
                        {amountDonate.map((amount, id) => (
                            <button
                                className={ `button has-text-weight-semibold my-2 ${id === amountId && 'donate-box-amount-selected'}` }
                                key={id}
                                onClick={() => setAmountId(id)}
                            >
                                {amount}K
                            </button>
                        ))}
                    </motion.div>
                    <motion.div className="block donate-box-button"
                        variants={inViewDropupShow}
                    >
                        <Button3
                            className="is-uppercase has-text-weight-bold"
                            onClick={showDonateForm}
                        >
                            {DONATENOW}
                        </Button3>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default DonateBox;
