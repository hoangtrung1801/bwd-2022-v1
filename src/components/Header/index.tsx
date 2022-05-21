import { Bag, CaretDown, Gear, List, SignIn, SignOut, X } from 'phosphor-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../logo.png';
import { routes } from '../../utils/constant';
import logout from '../../utils/functions/logout';
import useToken from '../../utils/hook/useToken';
import { useViewport } from '../../utils/hook/useViewport';
import Button3 from '../Button/Button3';
import CartAmount from './CartAmount';
import DropdownUser from './DropdownUser';
import './header.css';
import MenuList from './MenuList';
import NavCart from './NavCart';

const Header = () => {

    const location = useLocation();

    const {token, setToken} = useToken();
    const {isDesktop} = useViewport();

    const [menuListHovered, setMenuListHovered] = useState(-1);
    const [cartHovered, setCartHovered] = useState(false);
    const [dropdownUser, setDropdownUser] = useState(false);
    const [dropdownMenuList, setDropdownMenuList] = useState(false);
    const [dropdownMenuListItemSelected, setDropdownMenuListItemSelected] = useState(-1);

    const handleLogout = () => {
        logout();
        window.location.reload();
    }

    return (
        <header>
            <div className="header is-flex is-justify-content-space-between is-align-items-stretch px-6 full-width">
                <div className="is-size-1 has-text-weight-bold is-uppercase">
                    <Link to="/" className="header-logo is-unselectable">
                        <figure className="image is-2by1">
                            <img src={Logo} alt="" />
                        </figure>
                    </Link>
                </div>
                {isDesktop ? (
                    <>
                        <div className="header-menu full-height is-flex is-relative">
                            {routes.map((category, id) => (
                                <>
                                    <div className="is-flex is-align-items-center is-relative">
                                        <Link
                                            to={category.href}
                                            key={id}
                                            className={`is-uppercase has-text-weight-semibold is-flex is-justify-content-center is-align-items-center ${
                                                location.pathname ===
                                                category.href
                                                    ? "header-menu-active"
                                                    : ""
                                            }`}
                                            onMouseOver={() =>
                                                setMenuListHovered(id)
                                            }
                                            onMouseLeave={() =>
                                                setMenuListHovered(-1)
                                            }
                                        >
                                            <span>{category.name}</span>
                                            {category.subcategories ? (
                                                <CaretDown />
                                            ) : null}
                                        </Link>
                                    </div>
                                    {category.subcategories ? (
                                        <MenuList
                                            content={category.subcategories}
                                            menuListHovered={
                                                menuListHovered === id
                                                    ? true
                                                    : false
                                            }
                                        />
                                    ) : null}
                                </>
                            ))}
                        </div>

                        <div className="header-tool is-flex is-align-items-center">
                            {/* <Link to="#" className="is-size-4">
                                <MagnifyingGlass />
                            </Link> */}
                            <div>
                                <Link
                                    to="/checkout"
                                    className="is-relative is-size-4"
                                    onMouseOver={() => setCartHovered(true)}
                                    onMouseLeave={() =>
                                        setTimeout(
                                            () => setCartHovered(false),
                                            300
                                        )
                                    }
                                >
                                    <Bag /> <CartAmount />
                                </Link>
                                <NavCart isCartShow={cartHovered} />
                            </div>
                            {token ? (
                                <div className="full-height is-flex is-justify-content-center is-align-items-center is-relative">
                                    <p
                                        className="header-username has-text-weight-semibold is-clickable"
                                    >
                                        username
                                    </p>
                                    <a href="#">
                                        <Gear className='is-size-4 ml-3'
                                            onClick={() => setDropdownUser(!dropdownUser)}
                                        />
                                    </a>
                                    <DropdownUser
                                        dropdownUserHovered={
                                            dropdownUser
                                        }
                                    />
                                </div>
                            ) : (
                                <Link to="/login" className="is-size-4">
                                    <SignIn />
                                </Link>
                            )}

                        </div>
                    </>
                ) : (
                    <>
                        <div className='is-flex is-align-items-center'>
                            <div className='is-size-3 is-flex is-align-items-center is-clickable' onClick={() => setDropdownMenuList(!dropdownMenuList)}>
                                {
                                    dropdownMenuList ? <X /> : <List />
                                }
                            </div>
                            <div className={ `dropdown-menu-list is-flex is-justify-content-center ${dropdownMenuList ? 'dropdown-menu-list-show' : ''}` }>
                                <div className='full-width py-6'>
                                    <div className='block'>
                                        {
                                            routes.map((category, id) => (
                                                <div key={id}>
                                                        <div className={ `dropdown-menu-list-item is-relative is-size-5 is-uppercase has-text-weight-semibold py-5 mx-auto is-flex is-align-items-center is-justify-content-center is-clickable ${dropdownMenuListItemSelected === id ? 'dropdown-menu-list-item-show': ''}` }>
                                                            <Link to={category.href} className='has-text-light'>
                                                                {category.name}
                                                            </Link>
                                                            {
                                                                category.subcategories &&
                                                                <div onClick={() => setDropdownMenuListItemSelected(dropdownMenuListItemSelected === id ? -1 : id)}>
                                                                    <CaretDown size={28} weight='bold' className='item-expand'/>
                                                                </div>
                                                            }
                                                        </div>
                                                    {
                                                        category.subcategories && (
                                                            <div className={ `list-subcategory is-uppercase has-text-weight-bold mx-auto is-flex is-justify-content-center is-align-items-center is-flex-direction-column ${dropdownMenuListItemSelected === id ? 'list-subcategory-show' : ''}` }>
                                                                {
                                                                    category.subcategories.map((item, j) => (
                                                                        <Link to={item.href} key={j} className='subcategory py-2 px-2'>
                                                                            <span>{item.name}</span>
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='is-flex px-6' >
                                        {
                                            token ? (
                                                <div className='full-width is-flex is-align-items-center is-justify-content-space-between has-text-white'>
                                                    <div className='is-flex is-align-items-center'>
                                                        <p className='has-text-weight-semibold mr-4'>username</p>
                                                        <SignOut className='is-size-5 is-clickable' weight='bold' onClick={() => handleLogout()}/>
                                                    </div>

                                                    <div>
                                                        <Link
                                                            to="/checkout"
                                                            className="is-relative is-size-4 has-text-white"
                                                            onMouseOver={() => setCartHovered(true)}
                                                            onMouseLeave={() =>
                                                                setTimeout(
                                                                    () => setCartHovered(false),
                                                                    300
                                                                )
                                                            }
                                                        >
                                                            <Bag /> <CartAmount />
                                                        </Link>
                                                        <NavCart isCartShow={cartHovered} />
                                                    </div>

                                                </div>
                                            ) : (
                                                <Link to='/login' className='dropdown-menu-list-button mx-auto '>
                                                    <Button3 className='is-size-5 has-text-weight-semibold py-5'>Sign in</Button3>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            </div>
        </header>
    );
}

export default Header;