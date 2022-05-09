import { Handbag, MagnifyingGlass, MapPin, SignIn } from 'phosphor-react';
import { useState } from 'react';
import './header.css';
import MenuList from './MenuList';
import ModalSearch from './ModalSearch';
import NavCart from './NavCart';
import NavTool from './NavTool';
import NavToolBag from './NavToolBag';

const Header = () => {

    const [isMenulistHovered, setIsMenulistHovered] = useState(false);
    const [isModalSearchShow, setIsModalSearchShow] = useState(false);
    const [isCartShow, setIsCartShow] = useState(false);
    const menulist = ['best sellers', 'vaccum bottles', 'bags', 'others', 'about me'];

    return (
    <header className="header navbar is-fixed-top px-6 py-2 is-flex-direction-column">
        <div className="is-flex is-justify-content-space-between">
            <div className="is-flex is-align-items-center">
                <NavTool icon={<MagnifyingGlass />} onClick={() => setIsModalSearchShow(!isModalSearchShow)}>search</NavTool>
                <NavTool icon={<MapPin />}>find us</NavTool>
            </div>
            <div>
                <h1 className="is-size-1  has-text-weight-semibold">lavie<sup className="is-size-6">&#174;</sup></h1>
            </div>
            <div className="is-flex is-align-items-center">
                <NavTool icon={<SignIn />}>log in</NavTool>
                <NavToolBag icon={<Handbag />} onClick={() => setIsCartShow(!isCartShow)}>bag</NavToolBag>
            </div>
        </div>

        <nav className="breadcrumb is-centered mb-0 mt-3" aria-label="breadcrumbs">
            <ul className="is-align-items-center">
                {
                    menulist.map((item, id) => (
                        <li><a href="#" className="has-text-weight-semibold is-uppercase" key={id} onMouseOver={() => setIsMenulistHovered(true)} onMouseLeave={() => setIsMenulistHovered(false)}>{item}</a></li>
                    ))
                }
            </ul>
        </nav>

        <MenuList isMenulistHovered={isMenulistHovered} />
        <ModalSearch isModalSearchShow={isModalSearchShow} />
        <NavCart isCartShow={isCartShow} />

        <div className={ `header-background-dark ${isCartShow ? '' : 'is-hidden'}` } onClick={() => setIsCartShow(false)}></div>
    </header>

    )
}

export default Header;