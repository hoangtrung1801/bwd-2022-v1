import './button.css';

interface Button1Props {
    children: React.ReactNode,
    onClick ?: React.MouseEventHandler,
}

const Button1: React.FC<Button1Props> = ({children, onClick}) => {

    return (
        <button className='button button1' onClick={onClick || undefined}>
            {children}
        </button>
    )
}

export default Button1;