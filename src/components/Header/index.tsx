import { Bag, CaretDown, Handbag, MagnifyingGlass, MapPin, SignIn } from 'phosphor-react';
import { useState } from 'react';
// import './header.css';
import './header-test.css';
import MenuList from './MenuList';
import ModalSearch from './ModalSearch';
import NavCart from './NavCart';
import NavTool from './NavTool';
import NavToolBag from './NavToolBag';
import Logo from '../../logo.png';
import useToken from '../../utils/hook/useToken';

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
                            <MenuList content={''} menuListHovered={menuListHovered === id ? true : false} />
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
                            : <a href="/login"><SignIn /></a>
                    }
                    <a href="#" className="is-relative is-size-4" onMouseOver={() => setCartHovered(true)} onMouseLeave={() => setTimeout(() => setCartHovered(false), 300)}>
                        <Bag />{" "}
                        <div className="cart-amount">
                            <span>0</span>
                        </div>
                    </a>
                    <NavCart isCartShow={cartHovered} />
                </div>
            </div>
        </header>
    );
}

// const Header = () => {

//     const [isMenulistHovered, setIsMenulistHovered] = useState(false);
//     const [isModalSearchShow, setIsModalSearchShow] = useState(false);
//     const [isCartShow, setIsCartShow] = useState(false);
//     const menulist = ['best sellers', 'vaccum bottles', 'bags', 'others', 'about me'];

//     return (
//     <header className="header navbar is-fixed-top px-6 py-2 is-flex-direction-column">
//         <div className="is-flex is-justify-content-space-between">
//             <div className="is-flex is-align-items-center">
//                 <NavTool icon={<MagnifyingGlass />} onClick={() => setIsModalSearchShow(!isModalSearchShow)}>search</NavTool>
//                 <NavTool icon={<MapPin />}>find us</NavTool>
//             </div>
//             <div>
//                 <h1 className="is-size-1  has-text-weight-semibold">lavie<sup className="is-size-6">&#174;</sup></h1>
//             </div>
//             <div className="is-flex is-align-items-center">
//                 <NavTool icon={<SignIn />}>log in</NavTool>
//                 <NavToolBag icon={<Handbag />} onClick={() => setIsCartShow(!isCartShow)}>bag</NavToolBag>
//             </div>
//         </div>

//         <nav className="breadcrumb is-centered mb-0 mt-3" aria-label="breadcrumbs">
//             <ul className="is-align-items-center">
//                 {
//                     menulist.map((item, id) => (
//                         <li><a href="#" className="has-text-weight-semibold is-uppercase" key={id} onMouseOver={() => setIsMenulistHovered(true)} onMouseLeave={() => setIsMenulistHovered(false)}>{item}</a></li>
//                     ))
//                 }
//             </ul>
//         </nav>

//         <MenuList isMenulistHovered={isMenulistHovered} />
//         <ModalSearch isModalSearchShow={isModalSearchShow} />
//         <NavCart isCartShow={isCartShow} />

//         <div className={ `header-background-dark ${isCartShow ? '' : 'is-hidden'}` } onClick={() => setIsCartShow(false)}></div>
//     </header>

//     )
// }

export default Header;