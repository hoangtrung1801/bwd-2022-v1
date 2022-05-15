import './button.css';

interface Button3Props {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
    className ?: string,
}

const Button3 : React.FC<Button3Props> = ({children, onClick, className}) => {

    return (
        <button className={ `button button3 ${className}` } onClick={onClick || undefined}>{children}</button>
    )
}

export default Button3;