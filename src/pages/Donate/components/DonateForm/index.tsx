import { motion, Variants } from "framer-motion";
import { X } from "phosphor-react";
import { useState } from "react";
import ReactConfetti from "react-confetti";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Button4 from "../../../../components/Button/Button4";
import { DONATENOW, amountDonate } from "../../../../utils/constant";
import addNewDonater from "../../../../utils/functions/addNewDonater";
import "./donate-form.css";

interface DonateFormProps {
    closeDonateForm: () => void,
    openDonateForm: boolean,
    amountDonateId: number
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
    amountDonateId
}) => {

    const {register, handleSubmit, control} = useForm();

    const [confetti, setConfetti] = useState(false);

    const donateSucces = () => {
        toast.success("Cảm ơn bạn đã quyên góp !", {
            icon: '👏',
            style: {
                padding: '2rem 3rem',
                backgroundColor: 'var(--color-1)',
                color: 'white',
                fontWeight: 'bold',
            },
        });
        setConfetti(true);

        setTimeout(() => {
            setConfetti(false);
        }, 4000);
    }

    const onSubmit = (body: any) => {
        addNewDonater({...body, amount: amountDonate[amountDonateId]})
        donateSucces();
    }

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field columns">
                        <div className="control column is-6">
                            <input
                                type="text"
                                className="input"
                                placeholder="Họ"
                                {...register('lastName')}
                            />
                        </div>
                        <div className="control column is-6">
                            <input
                                type="text"
                                className="input"
                                placeholder="Tên"
                                {...register('firstName')}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Email"
                                {...register('email')}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                placeholder="Trường bạn đang học"
                                {...register('school')}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="has-text-weight-medium" style={{fontSize: '1.2rem'}}>
                            Số tiền bạn muốn quyên góp :
                        </p>
                            <span className="has-text-weight-semibold is-size-4" style={{textDecoration: 'underline', textDecorationColor: 'var(--color-1)', textUnderlineOffset: '3px', color: 'var(--color-1)'}}>{amountDonate[amountDonateId]}K</span>
                    </div>
                    <div className="mt-4">
                        <Button4 >{DONATENOW}</Button4>
                    </div>
                </form>
                <div
                    className="donate-form-close is-clickable"
                    onClick={closeDonateForm}
                >
                    <X size={32} />
                </div>
            </motion.div>

            {
                confetti && <ReactConfetti recycle={false} />
            }

        </motion.div>
    );
};

export default DonateForm;
