
interface CheckoutFormProps {

}

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
    return (
        <div className="checkout-form px-6 py-5">
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
                        <div className="column is-9 columns pr-0">
                            <div className="column is-half">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Tên"
                                />
                            </div>
                            <div className="column is-half pr-0">
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
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
