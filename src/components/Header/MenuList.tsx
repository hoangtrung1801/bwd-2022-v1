import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../utils/constant";
import { Category } from "../../utils/types/Cattegory";
import MenuListItemIcon from "./MenuListItemIcon";

interface MenuListProps {
    content?: Category[],
    menuListHovered: boolean
}

const MenuList : React.FC<MenuListProps> = ({content, menuListHovered}) => {
    const [hover, setHover] = useState(menuListHovered);

    return (
        <div className={ `menu-list is-block has-shadow ${menuListHovered || hover ? 'menu-list-show' : ''}` } >
            <div className="is-flex is-flex-wrap-wrap py-4" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {
                    content?.map((category, id ) => (
                        <div className="menu-list-item" key={id}>
                            <Link to={category.href} className='is-capitalized has-text-grey has-text-left has-text-weight-semibold is-flex is-align-items-center'>
                                <MenuListItemIcon iconName={categories.find(e => e.label === category.name)?.value} />
                                <span className="ml-1">
                                    {category.name}
                                </span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuList;
