import { Link } from "react-router-dom";
import Button4 from "../Button/Button4";
import "./banner-one.css";

const BannerOne = () => {
    return (
        <div className="banner-one is-flex is-justify-content-center is-align-items-center is-relative">
            <div className="has-text-centered">
                <div className="block">
                    <h1 className="title is-1 has-text-white">
                        Cùng chung tay quyên góp bảo vệ môi trường
                    </h1>
                    <p className="has-text-white mx-auto" style={{width: '75%'}}>
                        Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.
                    </p>
                </div>
                <Link to="/donate">
                    <Button4>Quyên góp</Button4>
                </Link>
            </div>
        </div>
    );
};

export default BannerOne;
