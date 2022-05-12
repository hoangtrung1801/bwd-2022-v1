import { useState } from "react";

interface MenuListProps {
    content?: string[][],
    menuListHovered: boolean
}

const MenuList : React.FC<MenuListProps> = ({content = [
    ["title", "menu 1", "menu 2", "menu 3"],
    ["title", "menu 1", "menu 2", "menu 3"],
], menuListHovered}) => {
    const [hover, setHover] = useState(menuListHovered);

    return (
        <div className={ `menu-list is-block has-shadow ${menuListHovered || hover ? 'menu-list-show' : ''}` } onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="columns px-4 py-5">
                {
                    content.map((_, i ) => (
                        <div className="column px-4" key={i}>
                            <div className="menu-list-column is-flex is-flex-direction-column">
                                {
                                    _.map((s, j) => (
                                        <a href="#" className={`menu-list-item ${j === 0 ? 'has-text-weight-semibold' : ''}`} key={j}>{s}</a>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuList;
