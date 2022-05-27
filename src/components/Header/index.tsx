import { Bag, CaretDown, List, SignOut, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo.png";
import { routes } from "../../utils/constant";
import logout from "../../utils/functions/logout";
import useToken from "../../utils/hook/useToken";
import { useViewport } from "../../utils/hook/useViewport";
import Button3 from "../Button/Button3";
import CartAmount from "./CartAmount";
import "./header.css";
import HeaderMenuDesktop from "./HeaderMenuDesktop";
import HeaderMenuMobile from "./HeaderMenuMobile";

const Header = () => {
    const { token, setToken } = useToken();
    const { isDesktop } = useViewport();

    return (
        <header>
            <div className="header is-flex is-justify-content-space-between is-align-items-stretch px-6">
                <div className="is-size-1 has-text-weight-bold is-uppercase">
                    <Link to="/" className="header-logo is-unselectable">
                        <figure className="image is-2by1">
                            <img src={Logo} alt="" />
                        </figure>
                    </Link>
                </div>
                {isDesktop ? (
                    <HeaderMenuDesktop token={token} />
                ) : (
                    <HeaderMenuMobile token={token} />
                )}
            </div>
        </header>
    );
};

export default Header;
