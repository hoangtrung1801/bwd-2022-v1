interface ModalSearchProps {
    isModalSearchShow: boolean
}
const ModalSearch: React.FC<ModalSearchProps> = ({isModalSearchShow}) => {
    return (
        <div
            className={`modal-search py-5  has-shadow ${
                isModalSearchShow ? "" : "is-hidden"
            }`}
        >
            <div className="is-flex is-align-items-center is-justify-content-center full-width">
                <input
                    type="text"
                    className="input"
                    placeholder="search the store"
                />
            </div>
        </div>
    );
};

export default ModalSearch;
