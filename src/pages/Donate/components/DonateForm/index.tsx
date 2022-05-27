import { motion, Variants } from "framer-motion";
import { X } from "phosphor-react";
import Button4 from "../../../../components/Button/Button4";
import { DONATENOW } from "../../../../utils/constant";
import "./donate-form.css";

interface DonateFormProps {
    closeDonateForm: () => void;
    openDonateForm: boolean;
}

const donateFormVariant: Variants = {
    close: {
        opacity: 0,
        y: "-100%",
        transition: {
            type: "spring",
            duration: 0.5,
        },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.5,
        },
    },
};

const DonateForm: React.FC<DonateFormProps> = ({
    openDonateForm,
    closeDonateForm,
}) => {
    return (
        <motion.div
            className="donate-form-wrapper is-flex is-justify-content-center is-align-items-center"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.01,
            }}
            exit={{
                opacity: 0,
                transition: {
                    when: 'afterChildren'
                }
            }}
        >
            <motion.div
                key="donate-form-box"
                className="donate-form has-text-centered has-background-white p-6 is-relative"
                variants={donateFormVariant}
                initial="close"
                animate={openDonateForm ? "open" : "close"}
                exit="close"
            >
                <div className="block has-text-centered">
                    <p className="is-size-5 has-text-weight-semibold">
                        Thông tin của bạn
                    </p>
                </div>
                <form action="" className="block">
                    <div className="field columns">
                        <div className="control column is-6">
                            <input
                                type="text"
                                className="input"
                                placeholder="Họ"
                            />
                        </div>
                        <div className="control column is-6">
                            <input
                                type="text"
                                className="input"
                                placeholder="Tên"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Trường bạn đang học"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button4>{DONATENOW}</Button4>
                    </div>
                </form>
                <div
                    className="donate-form-close is-clickable"
                    onClick={closeDonateForm}
                >
                    <X size={32} />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default DonateForm;
