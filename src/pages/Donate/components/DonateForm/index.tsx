import { X } from "phosphor-react";
import Button3 from "../../../../components/Button/Button3";
import Button4 from "../../../../components/Button/Button4";
import { DONATENOW } from "../../../../utils/constant";
import "./donate-form.css";

interface DonateFormProps {
    closeDonateForm: () => void
}

const DonateForm: React.FC<DonateFormProps> = ({closeDonateForm}) => {
    return (
        <div className="donate-form-wrapper is-flex is-justify-content-center is-align-items-center">
            <div className="donate-form has-text-centered has-background-white p-6 is-relative">
                <div className="block has-text-centered">
                    <p className="is-size-5 has-text-weight-semibold">Thông tin của bạn</p>
                </div>
                <form action="" className="block">
                    <div className="field columns">
                        <div className="control column is-6">
                            <input type="text" className="input" placeholder="Họ"/>
                        </div>
                        <div className="control column is-6">
                            <input type="text" className="input" placeholder="Tên"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" placeholder="Trường bạn đang học"/>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button4>{DONATENOW}</Button4>
                    </div>
                </form>
                <div className="donate-form-close is-clickable" onClick={closeDonateForm}>
                    <X size={32} />
                </div>
            </div>
        </div>
    );
};

export default DonateForm;
