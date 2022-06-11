import { onLog } from 'firebase/app';
import { signOut } from 'firebase/auth';
import { SignOut } from 'phosphor-react';
import React, { useState } from 'react';
import { auth } from '../../firebase';

interface DropdownUserProps {
    dropdownUserHovered : boolean,
    onLogOut: () => void
}

const DropdownUser: React.FC<DropdownUserProps> = ({dropdownUserHovered, onLogOut}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`dropdown-user px-4 py-2 ${
                ( hovered || dropdownUserHovered ) && "dropdown-user-show"
            }`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ul>
                <li className="is-flex is-align-items-center is-justify-content-space-between is-clickable has-text-grey " onClick={() => onLogOut()}>
                    <span>Log out</span>
                    <SignOut />
                </li>
            </ul>
        </div>
    );
}

export default DropdownUser