import { Bag, CaretDown, MagnifyingGlass, SignIn } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import useToken from '../../utils/hook/useToken';
import CartAmount from './CartAmount';
import './header.css';
import MenuList from './MenuList';
import NavCart from './NavCart';

const Header = () => {

    const {token, setToken} = useToken();
    const menulist = ['home', 'vaccume battles', 'bestsellers', 'bag'];
    const [menuListContent, setMenuListContent] = useState([]);
    const [menuListHovered, setMenuListHovered] = useState(-1);
    const [cartHovered, setCartHovered] = useState(false);

    return (
        <header>
            <div className="header is-flex is-justify-content-space-between is-align-items-stretch px-6 full-width">
                <div className="is-size-1 has-text-weight-bold is-uppercase">
                    <Link to='/' className='header-logo'>
                        <figure className="image is-2by1">
                            <img src={Logo} alt="" />
                        </figure>
                    </Link>
                </div>

                <div className="header-menu full-height is-flex is-relative">
                    {menulist.map((s, id) => (
                        <>
                            <div className="is-flex is-align-items-center is-relative">
                                <a
                                    href="#"
                                    key={id}
                                    className="is-uppercase has-text-weight-semibold is-flex is-justify-content-center is-align-items-center"
                                    onMouseOver={() => setMenuListHovered(id)}
                                    onMouseLeave={() => setMenuListHovered(-1)}
                                >
                                    <span>{s}</span> <CaretDown />
                                </a>
                            </div>
                            <MenuList menuListHovered={menuListHovered === id ? true : false} />
                        </>
                    ))}
                </div>

                <div className="header-tool is-flex is-align-items-center">
                    <Link to="#" className='is-size-4'>
                        <MagnifyingGlass />
                    </Link>
                    {
                        token ?
                            <p className="header-username has-text-weight-semibold">
                                username
                            </p>
                            : <Link to="/login" className='is-size-4'><SignIn /></Link>
                    }
                    <div>
                        <Link to="#" className="is-relative is-size-4" onMouseOver={() => setCartHovered(true)} onMouseLeave={() => setTimeout(() => setCartHovered(false), 300)}>
                            <Bag />{" "}
                            <CartAmount />
                        </Link>
                        <NavCart isCartShow={cartHovered} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;