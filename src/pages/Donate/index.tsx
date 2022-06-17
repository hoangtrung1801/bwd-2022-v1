import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ReactConfetti from "react-confetti";
import Confetti from "react-confetti/dist/types/Confetti";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { amountDonate, donateSection } from "../../utils/constant";
import DonateAction from "./components/DonateAction";
import DonateBox from "./components/DonateBox";
import DonateForm from "./components/DonateForm";
import DonateRanking from "./components/DonateRanking";
import DonateValue from "./components/DonateValue";

interface DonateProps {}

const Donate: React.FC<DonateProps> = ({}) => {

    const [openDonateForm, setOpenDonateForm] = useState(false);
    const [amountDonateId, setAmountDonateId] = useState(-1);

    const showDonateForm = () => {
        setOpenDonateForm(true);
    }

    const closeDonateForm = () => {
        setOpenDonateForm(false);
    }

    return (
        <Layout>
            <Banner sections={donateSection} />
            <DonateValue />
            <DonateAction />
            {/* <DonateAction isLeft={true}/> */}
            <DonateBox showDonateForm={showDonateForm} amountDonateId={amountDonateId} setAmountDonateId={setAmountDonateId}/>
            <AnimatePresence exitBeforeEnter>
                {
                    openDonateForm && (
                        <DonateForm key='donate-form'  openDonateForm={openDonateForm} closeDonateForm={closeDonateForm} amountDonateId={amountDonateId}/>
                    )
                }
            </AnimatePresence>
        </Layout>
    );
};

export default Donate;
