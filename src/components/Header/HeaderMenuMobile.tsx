import { motion, Variants } from "framer-motion";
import { Bag, CaretDown, SignOut } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/constant";
import logout from "../../utils/functions/logout";
import User from "../../utils/types/User";
import Button3 from "../Button/Button3";
import CartAmount from "./CartAmount";


const dropdownMenuListMobileVariants: Variants = {
    hidden: {
        height: 0
    },
    visible: {
        height: 'calc(100vh - 80px)'
    }
}

const dropdownSubcategoryMobileVariants: Variants = {
    hidden: {
        height: 0,
    },
    visible: {
        height: 320
    }
}


interface HeaderMenuMobileProps {
    // token: string | null,
    user: User | undefined,
    onLogOut: () => void
}

const HeaderMenuMobile: React.FC<HeaderMenuMobileProps> = ({user, onLogOut}) => {
    const [dropdownMenuList, setDropdownMenuList] = useState(false);
    const [dropdownMenuListItemSelected, setDropdownMenuListItemSelected] = useState(-1);

    const handleLogout = () => {
        logout();
        window.location.reload();
    }

    return (
        <>
            <div className="full-height">
                <div
                    className="full-height"
                    onClick={() => setDropdownMenuList(!dropdownMenuList)}
                >
                    <MenuBar open={dropdownMenuList}/>
                </div>
                <motion.div
                    className={`dropdown-menu-list is-flex is-justify-content-center ${
                        dropdownMenuList ? "dropdown-menu-list-show" : ""
                    }`}
                    variants={dropdownMenuListMobileVariants}
                    initial='hidden'
                    animate={dropdownMenuList ? 'visible' : 'hidden'}
                >
                    <div className="full-width py-6">
                        <div className="block">
                            {routes.map((route, id) => (
                                <div key={id}>
                                    <div
                                        className={`dropdown-menu-list-item is-relative is-size-5 is-uppercase has-text-weight-semibold py-5 mx-auto is-flex is-align-items-center is-justify-content-center is-clickable ${
                                            dropdownMenuListItemSelected === id
                                                ? "dropdown-menu-list-item-show"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to={route.href}
                                            className="has-text-light"
                                        >
                                            {route.name}
                                        </Link>
                                        {route.subcategories && (
                                            <div
                                                onClick={() =>
                                                    setDropdownMenuListItemSelected(
                                                        dropdownMenuListItemSelected ===
                                                            id
                                                            ? -1
                                                            : id
                                                    )
                                                }
                                            >
                                                <CaretDown
                                                    size={28}
                                                    weight="bold"
                                                    className="item-expand"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {route.subcategories && (
                                        <motion.div
                                            className={`list-subcategory is-uppercase has-text-weight-bold mx-auto is-flex is-justify-content-center is-align-items-center is-flex-direction-column`}
                                            variants={dropdownSubcategoryMobileVariants}
                                            initial='hidden'
                                            animate={dropdownMenuListItemSelected === id ? 'visible' : 'hidden'}
                                        >
                                            {route.subcategories.map(
                                                (item, j) => (
                                                    <Link
                                                        to={item.href}
                                                        key={j}
                                                        className="subcategory py-2 px-2"
                                                    >
                                                        <span>{item.name}</span>
                                                    </Link>
                                                )
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="is-flex px-6">
                            {user ? (
                                <div className="full-width is-flex is-align-items-center is-justify-content-space-between has-text-white">
                                    <div className="is-flex is-align-items-center">
                                        <p className="has-text-weight-semibold mr-4 font-heading">
                                            {user.username}
                                        </p>
                                        <SignOut
                                            className="is-size-5 is-clickable"
                                            weight="bold"
                                            onClick={() => onLogOut()}
                                        />
                                    </div>

                                    <div>
                                        <Link
                                            to="/checkout"
                                            className="is-relative is-size-4 has-text-white"
                                        >
                                            <Bag /> <CartAmount />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="dropdown-menu-list-button mx-auto "
                                >
                                    <Button3 className="is-size-5 has-text-weight-semibold py-5">
                                        Đăng nhập
                                    </Button3>
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

interface MenuBarProps {
    open: boolean
}

const MenuBar: React.FC<MenuBarProps> = ({open}) => {
    return (
        <div className={ `menu-bar is-flex is-align-items-center is-justify-content-center is-flex-direction-column is-clickable ${open && 'menu-bar-open'}` }>
            <i></i>
            <i></i>
            <i></i>
        </div>
    )
}

export default HeaderMenuMobile;
