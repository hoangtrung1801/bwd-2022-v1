import { useViewport } from "../../../utils/hook/useViewport";

interface CheckoutFormProps {
    donateAmount: number;
    setDonateAmount: React.Dispatch<React.SetStateAction<number>>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
    donateAmount,
    setDonateAmount,
}) => {
    const { isMobile } = useViewport();

    return (
        <div className={`checkout-form  py-5 ${isMobile ? "px-4" : "px-6"}`}>
            <div className="block">
                <h1 className="is-size-3 has-text-weight-bold is-uppercase">
                    Thanh toán
                </h1>
            </div>
            <div>
                <form action="">
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label has-text-grey">
                                Họ và tên
                            </label>
                        </div>
                        <div
                            className={`column is-9 columns ${
                                isMobile ? "py-0" : "pr-0"
                            }`}
                        >
                            <div className="column is-half">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Tên"
                                />
                            </div>
                            <div
                                className={`column is-half ${
                                    !isMobile && "pr-0"
                                }`}
                            >
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Họ"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Email
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="text"
                                className="input"
                                placeholder="nguyenvana@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Số nhà
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="text"
                                className="input"
                                placeholder="123 Trần Cao Vân ..."
                            />
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Thành phố
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="text"
                                className="input"
                                placeholder="Đà Nẵng"
                            />
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Quốc gia
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="text"
                                className="input"
                                placeholder="Việt Nam"
                            />
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Số điện thoại
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="text"
                                className="input"
                                placeholder="0123456789"
                            />
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Lời nhắn
                            </label>
                        </div>
                        <div className="column is-9">
                            <textarea
                                className="textarea"
                                rows={2}
                                placeholder="e.g. Hello world"
                            ></textarea>
                        </div>
                    </div>
                    <div className="field columns">
                        <div className="column is-3 is-flex is-align-items-center">
                            <label htmlFor="" className="label">
                                Quyên góp (không bắt buộc)
                            </label>
                        </div>
                        <div className="column is-9">
                            <input
                                type="number"
                                className="input"
                                placeholder="0123456789"
                                value={donateAmount}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setDonateAmount(parseInt(e.target.value))}
                            />
                            <p className="is-size-7 mt-1 ml-1 has-text-grey-light">
                                Số tiền bạn quyên góp sẽ chuyển trực tiếp tới
                                quỹ từ thiện bảo bệ môi trường.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
