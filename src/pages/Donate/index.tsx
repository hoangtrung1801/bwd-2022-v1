import { useState } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { donateSection } from "../../utils/constant";
import DonateAction from "./components/DonateAction";
import DonateBox from "./components/DonateBox";
import DonateForm from "./components/DonateForm";
import DonateValue from "./components/DonateValue";

interface DonateProps {}

const Donate: React.FC<DonateProps> = ({}) => {

    const [openDonateForm, setOpenDonateForm] = useState(false);

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
            <DonateBox showDonateForm={showDonateForm}/>
            {
                openDonateForm && <DonateForm  openDonateForm={openDonateForm} closeDonateForm={closeDonateForm}/>
            }

        </Layout>
    );
};

export default Donate;
