import { Bag, Coffee, DotsThree } from "phosphor-react";

interface MenuListItemIconProps {
    iconName: string | undefined
}

const MenuListItemIcon: React.FC<MenuListItemIconProps> = ({iconName}) => {

    if(iconName === "canvas") return <div><img src="/public/assets/silk-icon.png" width={16} height={16}/></div>
    if(iconName === "bamboo") return <div><img src="/public/assets/bamboo-icon.png" width={16} height={16}/></div>
    if(iconName === "disposable-nilon") return <div><img src="/public/assets/disposable-nilon-icon.png" width={16} height={16}/></div>
    if(iconName === "toothbrush") return <div><img src="/public/assets/brush-teeth-icon.png" width={16} height={16}/></div>
    if(iconName === "straw") return <div><img src="/public/assets/straw-icon.png" width={16} height={16}/></div>
    if(iconName === "bottle") return <div><img src="/public/assets/bottle-icon.png" width={16} height={16}/></div>
    if(iconName === "cup") return <div><Coffee size={16} /></div>
    if(iconName === "others") return <div><img src="/public/assets/others-icon.png" width={16} height={16}/></div>

    return <Bag />
}

export default MenuListItemIcon;