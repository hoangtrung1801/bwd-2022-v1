import { useState } from 'react';
import './option-container.css';

interface OptionContainerProps {
    options: string[]
}
const OptionContainer : React.FC<OptionContainerProps> = ({options}) => {
    const [optionSelected, setOptionSelected] = useState(0);

    return (
        <ul className="option-container is-flex is-align-items-center py-1">
            {
                options.map((item: string, id: number) => (
                    <li key={id} className={`${optionSelected === id ? 'option-container-selected' : ''}`} onClick={() => setOptionSelected(id)}>{item}</li>
                ))
            }
        </ul>
    )
}

export default OptionContainer;