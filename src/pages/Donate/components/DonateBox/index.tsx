import Button3 from '../../../../components/Button/Button3';
import './donate-box.css';

interface DonateBoxProps {
    showDonateForm: () => void;
}

const amountDonate = [50, 100, 200, 500, 1000];

const DonateBox: React.FC<DonateBoxProps> = ({showDonateForm}) => {

    return (
        <div className="donate-box-wrapper" onClick={() => console.log('click')}>
            <div className="donate-box full-height is-flex is-flex-direction-column is-align-items-center is-justify-content-center mx-auto">
                <div className="donate-box-title block has-text-centered mb-6">
                    <p className="is-size-5 is-uppercase has-text-weight-semibold">
                        Donation
                    </p>
                    <p className="is-size-2 is-uppercase has-text-weight-bold">
                        Building a better future
                    </p>
                    <p className="has-text-grey">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Tenetur, nesciunt omnis itaque eos porro enim
                        nihil culpa.
                    </p>
                </div>
                <div className="block donate-box-amount mb-6">
                    {amountDonate.map((amount, id) => (
                        <button
                            className="button has-text-weight-semibold"
                            key={id}
                        >
                            {amount}K
                        </button>
                    ))}
                </div>
                <div className="block donate-box-button">
                    <Button3 className="is-uppercase has-text-weight-bold" onClick={showDonateForm}>
                        Donate now
                    </Button3>
                </div>
            </div>
        </div>
    );
};

export default DonateBox