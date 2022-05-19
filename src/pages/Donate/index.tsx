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

    const [donateForm, setDonateForm] = useState(false);

    const showDonateForm = () => {
        setDonateForm(true);
    }

    const closeDonateForm = () => {
        setDonateForm(false);
    }

    return (
        <Layout>
            <Banner sections={donateSection} />
            <DonateValue />
            <DonateAction />
            {/* <DonateAction isLeft={true}/> */}
            <DonateBox showDonateForm={showDonateForm}/>
            {
                donateForm && <DonateForm closeDonateForm={closeDonateForm}/>
            }

        </Layout>
    );
};

export default Donate;
