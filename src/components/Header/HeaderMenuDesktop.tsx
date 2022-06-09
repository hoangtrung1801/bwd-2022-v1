import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { Bag, CaretDown, Gear, SignIn } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { auth, collectionUsers, db } from "../../firebase";
import { routes } from "../../utils/constant";
import useToken from "../../utils/hook/useToken";
import User from "../../utils/types/User";
import CartAmount from "./CartAmount";
import DropdownUser from "./DropdownUser";
import MenuList from "./MenuList";
import NavCart from "./NavCart";

interface HeaderMenuDesktopProps {
    // token: string | null
    user: User | undefined
}

const HeaderMenuDesktop: React.FC<HeaderMenuDesktopProps> = ({user}) => {
    const [menuListHovered, setMenuListHovered] = useState(-1);
    const [navCartOpen, setNavCartOpen] = useState(false);
    const [dropdownUser, setDropdownUser] = useState(false);

    const openNavCart = () => {
        setNavCartOpen(true);
    }

    const closeNavCart = () => { setNavCartOpen(false); }

    return (
        <>
            <div className="header-menu full-height is-flex is-relative">
                {routes.map((category, id) => (
                    <>
                        <div className="is-flex is-align-items-center is-relative">
                            <Link
                                to={category.href}
                                key={id}
                                className={`header-menu-item is-size-6 has-text-weight-bold is-flex is-justify-content-center is-align-items-center font-heading ${
                                    location.pathname === category.href
                                        ? "header-menu-active"
                                        : ""
                                }`}
                                onMouseOver={() => setMenuListHovered(id)}
                                onMouseLeave={() => {
                                    setTimeout(() => {
                                        setMenuListHovered(-1);
                                    }, 300);
                                }}
                            >
                                <span>{category.name}</span>
                                {category.subcategories ? <CaretDown /> : null}
                                {location.pathname === category.href ? (
                                    <motion.div
                                        className="header-menu-underline"
                                        layoutId="underline"
                                    ></motion.div>
                                ) : null}
                            </Link>
                        </div>

                        {category.subcategories ? (
                            <MenuList
                                content={category.subcategories}
                                menuListHovered={
                                    menuListHovered === id ? true : false
                                }
                            />
                        ) : null}
                    </>
                ))}
            </div>

            <div className="header-tool is-flex is-align-items-center">
                <div>
                    <span
                        className="is-relative is-size-4 is-clickable"
                        onClick={openNavCart}
                    >
                        <Bag /> <CartAmount />
                    </span>
                    <NavCart
                        isCartShow={navCartOpen}
                        closeNavCart={closeNavCart}
                    />
                </div>
                {user ? (
                    <div className="full-height is-flex is-justify-content-center is-align-items-center is-relative">
                        <p className="header-username font-heading has-text-weight-semibold is-clickable"
                            onClick={() => setDropdownUser(!dropdownUser)}
                        >
                            {user.username}
                            <span className="ml-2 is-size-7"><CaretDown/></span>
                        </p>
                        <DropdownUser dropdownUserHovered={dropdownUser} />
                    </div>
                ) : (
                    <Link to="/login" className="is-size-4">
                        <SignIn />
                    </Link>
                )}
            </div>
        </>
    );
};

export default HeaderMenuDesktop;
