import { SignOut } from 'phosphor-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logout from '../../utils/functions/logout';

interface DropdownUserProps {
    dropdownUserHovered : boolean
}

const DropdownUser: React.FC<DropdownUserProps> = ({dropdownUserHovered}) => {
    const [hovered, setHovered] = useState(false);
    const handleLogout = () => {
        logout();
        window.location.reload();
    }
    return (
        <div
            className={`dropdown-user px-4 py-2 ${
                ( hovered || dropdownUserHovered ) && "dropdown-user-show"
            }`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ul>
                <li className="is-flex is-align-items-center is-justify-content-space-between is-clickable has-text-grey " onClick={handleLogout}>
                    <span>Log out</span>
                    <SignOut />
                </li>
            </ul>
        </div>
    );
}

export default DropdownUser