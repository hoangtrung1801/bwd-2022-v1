import './button.css';

interface Button3Props {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler,
}

const Button3 : React.FC<Button3Props> = ({children, onClick}) => {

    return (
        <button className="button button3" onClick={onClick || undefined}>{children}</button>
    )
}

export default Button3;