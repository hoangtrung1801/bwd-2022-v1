import { Bag, CaretDown, MagnifyingGlass, SignIn } from 'phosphor-react';
import { useState } from 'react';
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
                    <a href="/" className="header-logo">
                        <figure className="image is-2by1">
                            <img src={Logo} alt="" />
                        </figure>
                    </a>
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
                    <a href="#" className='is-size-4'>
                        <MagnifyingGlass />
                    </a>
                    {
                        token ?
                            <p className="header-username has-text-weight-semibold">
                                username
                            </p>
                            : <a href="/login" className='is-size-4'><SignIn /></a>
                    }
                    <div>
                        <a href="#" className="is-relative is-size-4" onMouseOver={() => setCartHovered(true)} onMouseLeave={() => setTimeout(() => setCartHovered(false), 300)}>
                            <Bag />{" "}
                            <CartAmount />
                        </a>
                        <NavCart isCartShow={cartHovered} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;