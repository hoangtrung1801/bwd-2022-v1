import Button3 from '../../../../components/Button/Button3';
import { DONATENOW } from '../../../../utils/constant';
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
                        Quyên góp
                    </p>
                    <p className="is-size-2 is-uppercase has-text-weight-bold">
                       Vì một môi trường xanh sạch đẹp
                    </p>
                    <p className="has-text-grey">
                        Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại sự thay đổi tích cực cho môi trường.
                    </p>
                </div>
                <div className="block donate-box-amount mb-6 is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
                    {amountDonate.map((amount, id) => (
                        <button
                            className="button has-text-weight-semibold my-2"
                            key={id}
                        >
                            {amount}K
                        </button>
                    ))}
                </div>
                <div className="block donate-box-button">
                    <Button3 className="is-uppercase has-text-weight-bold" onClick={showDonateForm}>
                        {DONATENOW}
                    </Button3>
                </div>
            </div>
        </div>
    );
};

export default DonateBox