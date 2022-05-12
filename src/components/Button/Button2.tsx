import './button.css';

interface Button2Props {
    children: React.ReactNode,
    onClick ?: React.MouseEventHandler,
}

const Button2: React.FC<Button2Props> = ({children, onClick}) => {

    return (
        <button className="button button2" onClick={onClick || undefined}>
            {children}
        </button>
    )
}

export default Button2;