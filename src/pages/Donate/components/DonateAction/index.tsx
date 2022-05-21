import { donateActionSection, DONATENOW } from "../../../../utils/constant";
import { useViewport } from "../../../../utils/hook/useViewport";
import "./donate-action.css";

interface DonateActionProps {
    isLeft?: boolean;
}

const DonateAction: React.FC<DonateActionProps> = ({ isLeft = false }) => {

    const {isMobileTablet} = useViewport();

    return (
        <div className="donate-action-wrapper is-flex is-justify-content-center is-align-items-center">
            <div className="donate-action is-relative">
                <figure
                    className="image is-9by6"
                    style={{
                        width: "100%",
                        maxHeight: "500px",
                        overflow: "hidden",
                    }}
                >
                    <img src={donateActionSection.image} alt="" />
                </figure>
                <div
                    className={`donate-action-content ${ isLeft && "donate-action-content-left"} ${isMobileTablet && 'donate-action-content-mobile'}`}
                >
                    <div className="block">
                        <p className="is-size-2 has-text-weight-bold">
                            {donateActionSection.title}
                        </p>
                    </div>
                    <div className="block">
                        <p className="">{donateActionSection.content}</p>
                    </div>
                    <div className="block">
                        <a
                            href="#"
                            className="is-uppercase is-size-6 has-text-weight-semibold"
                        >
                            {DONATENOW}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateAction;
