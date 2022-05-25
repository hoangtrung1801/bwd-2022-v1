import { useState } from "react";
import { Category } from "../../utils/types/Cattegory";

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
                            <a href={category.href} className='is-capitalized has-text-grey'>{category.name}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MenuList;
