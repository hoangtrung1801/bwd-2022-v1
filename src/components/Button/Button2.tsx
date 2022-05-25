import './button.css';

interface Button2Props {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
    className ?: string,
}

const Button2: React.FC<Button2Props> = ({children, onClick, className}) => {

    return (
        <button className={ `button button2 ${className}` }  onClick={onClick || undefined}>
            {children}
        </button>
    )
}

export default Button2;